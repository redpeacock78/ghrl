// deno-lint-ignore-file camelcase no-inferrable-types
import { ky } from "./deps.ts";

// https://example.com/:author/:repo
// https://example.com/:author/:repo?source=zip
// https://example.com/:author/:repo/:assets_name
export async function latest(
  params: {
    author: string;
    repo: string;
    assets_name?: string;
    source?: string;
  },
): Promise<string> {
  const author: string = params.author;
  const repo_name: string = params.repo;
  const assets_name: string | undefined = params.assets_name;
  const source: string | undefined = params.source;
  if (source && source !== "zip") {
    throw new Error("Only zip can be specified in the source parameter.");
  }
  const latest_api: string =
    `https://api.github.com/repos/${author}/${repo_name}/releases/latest`;
  return await ky
    .get(latest_api)
    .then(async (i: Response): Promise<string> => {
      const latest = (await i.json()) as unknown as {
        assets: unknown[];
        tarball_url: string;
        zipball_url: string;
      };
      const releases_urls: string[] =
        (latest.assets as [{ browser_download_url: string }]).map(
          (i): string => {
            return i.browser_download_url;
          },
        );
      if (assets_name) {
        const assets_arr: string[] = releases_urls.map((i: string): string => {
          return i.split("/")[8];
        });
        const assets_name_judge: string[] = assets_arr
          .map((i: string, n: number): string => {
            return i === `${assets_name}` ? n.toString() : "";
          })
          .filter(Boolean) as string[];
        const assets_url: string =
          releases_urls[parseInt(assets_name_judge.join(""))];
        if (typeof assets_url === "string") {
          return assets_url;
        } else {
          throw new Error("There is no asset with that name.");
        }
      } else if (source === "zip") {
        return latest.zipball_url;
      } else {
        return latest.tarball_url;
      }
    })
    .catch((e: Error): never => {
      throw new Error(e.message);
    });
}
