import ky from "https://cdn.skypack.dev/ky?dts";

// https://example.com/:author/:repo@tag
// https://example.com/:author/:repo@tag?source=zip
// https://example.com/:author/:repo@tag/:assets_name
export async function tagging(params: { author: string; repo: string; tag: string; assets_name?: string; source?: string }) {
  const author: string = params.author;
  const repo_name: string = params.repo;
  const tag: string = params.tag;
  const assets_name: string | undefined = params.assets_name;
  const source: string | undefined = params.source;
  if (source && source !== "zip") {
    throw new Error("Only zip can be specified in the source parameter.");
  }
  const tagging_api: string = `https://api.github.com/repos/${author}/${repo_name}/releases`;
  return await ky
    .get(tagging_api)
    .then(async (i: Response): Promise<string> => {
      const resp = (await i.json()) as unknown as [{ tag_name: string; assets: unknown[]; tarball_url: string; zipball_url: string }];
      const tag_arr: string[] = resp.map((i: { tag_name: string; assets: unknown[] }): string => i.tag_name);
      if (tag_arr.indexOf(tag) !== -1) {
        const releases_urls: string[] = (resp[tag_arr.indexOf(tag)].assets as [{ browser_download_url: string }]).map((i): string => {
          return i.browser_download_url;
        });
        if (assets_name) {
          const assets_arr: string[] = releases_urls.map((i: string): string => {
            return i.split("/")[8];
          });
          const assets_name_judge: string[] = assets_arr
            .map((i: string, n: number): string => {
              return i === `${assets_name}` ? n.toString() : "";
            })
            .filter(Boolean) as string[];
          const assets_url: string = releases_urls[parseInt(assets_name_judge.join(""))];
          if (typeof assets_url === "string") {
            return assets_url;
          } else {
            throw new Error("There is no asset with that name.");
          }
        } else if (source === "zip") {
          return resp[tag_arr.indexOf(tag)].zipball_url;
        } else {
          return resp[tag_arr.indexOf(tag)].tarball_url;
        }
      } else {
        throw new Error("No such tag exists.");
      }
    })
    .catch((e: Error): never => {
      throw new Error(e.message);
    });
}
