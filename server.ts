import { Aqua, latest, tagging, index } from "./deps.ts";

const app = new Aqua();

// Root index
app.get("/", async (): Promise<any> => {
  const root: string = await index();
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html; charset=UTF-8" },
    content: root,
  };
});

// Download source code
app.get("/:author/:repo", async (req): Promise<any> => {
  const author: string = req.parameters.author;
  const repo: string = req.parameters.repo.match(/@.+$/) ? req.parameters.repo.substring(0, req.parameters.repo.indexOf("@")) : req.parameters.repo;
  const tag: string | null = req.parameters.repo.match(/@.+$/) ? req.parameters.repo.substring(req.parameters.repo.indexOf("@")).replace("@", "") : null;
  const source: string = req.query.source;
  if (author && repo && !source) {
    if (!tag) {
      // Latest
      // /:author/:repo
      const params_arr = { author: author, repo: repo };
      return await latest(params_arr)
        .then((i: string) => {
          return {
            statusCode: 302,
            redirect: i,
          };
        })
        .catch((e: Error) => {
          return {
            statusCode: 404,
            headers: { "Content-Type": "applixation/json; charset=UTF-8" },
            content: JSON.parse(JSON.stringify(`{ "Error": "${e.message}" }`)),
          };
        });
    } else {
      // Tagging
      // /:author/:repo@tag
      const params_arr = { author: author, repo: repo, tag: tag };
      return await tagging(params_arr)
        .then((i: string) => {
          return {
            statusCode: 302,
            redirect: i,
          };
        })
        .catch((e: Error) => {
          return {
            statusCode: 404,
            headers: { "Content-Type": "applixation/json; charset=UTF-8" },
            content: JSON.parse(JSON.stringify(`{ "Error": "${e.message}" }`)),
          };
        });
    }
  } else if (author && repo && source) {
    if (!tag) {
      // Latest
      // /:author/:repo?source=zip
      const params_arr = { author: author, repo: repo, source: source };
      return await latest(params_arr)
        .then((i: string) => {
          return {
            statusCode: 302,
            redirect: i,
          };
        })
        .catch((e: Error) => {
          return {
            statusCode: 404,
            headers: { "Content-Type": "applixation/json; charset=UTF-8" },
            content: JSON.parse(JSON.stringify(`{ "Error": "${e.message}" }`)),
          };
        });
    } else {
      // Tagging
      // /:author/:repo@tag?source=zip
      const params_arr = { author: author, repo: repo, tag: tag, source: source };
      return await tagging(params_arr)
        .then((i: string) => {
          return {
            statusCode: 302,
            redirect: i,
          };
        })
        .catch((e: Error) => {
          return {
            statusCode: 404,
            headers: { "Content-Type": "applixation/json; charset=UTF-8" },
            content: JSON.parse(JSON.stringify(`{ "Error": "${e.message}" }`)),
          };
        });
    }
  }
});

// Download assets
app.get("/:author/:repo/:assets_name", async (req): Promise<any> => {
  const author: string = req.parameters.author;
  const repo: string = req.parameters.repo.match(/@.+$/) ? req.parameters.repo.substring(0, req.parameters.repo.indexOf("@")) : req.parameters.repo;
  const tag: string | null = req.parameters.repo.match(/@.+$/) ? req.parameters.repo.substring(req.parameters.repo.indexOf("@")).replace("@", "") : null;
  const assets_name: string = req.parameters.assets_name;
  if (author && repo && assets_name) {
    if (!tag) {
      // Latest
      // /:author/:repo/:assets_name
      const params_arr = { author: author, repo: repo, assets_name: assets_name };
      return await latest(params_arr)
        .then((i: string) => {
          return {
            statusCode: 302,
            redirect: i,
          };
        })
        .catch((e: Error) => {
          return {
            statusCode: 404,
            headers: { "Content-Type": "applixation/json; charset=UTF-8" },
            content: JSON.parse(JSON.stringify(`{ "Error": "${e.message}" }`)),
          };
        });
    } else {
      // Tagging
      // /:author/:repo@tag/:assets_name
      const params_arr = { author: author, repo: repo, tag: tag, assets_name: assets_name };
      return await tagging(params_arr)
        .then((i: string) => {
          return {
            statusCode: 302,
            redirect: i,
          };
        })
        .catch((e: Error) => {
          return {
            statusCode: 404,
            headers: { "Content-Type": "applixation/json; charset=UTF-8" },
            content: JSON.parse(JSON.stringify(`{ "Error": "${e.message}" }`)),
          };
        });
    }
  }
});
