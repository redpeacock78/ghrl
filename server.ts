import { opine, latest, tagging, index } from "./deps.ts";

const app = opine();

// Root index
app.get("/", async (req, res): Promise<void> => {
  const root: string = await index();
  res.send(root);
});

// Download source code
app.get("/:author/:repo", async (req, res): Promise<void> => {
  const author: string = req.params.author;
  const repo: string = req.params.repo.match(/@.+$/) ? req.params.repo.substring(0, req.params.repo.indexOf("@")) : req.params.repo;
  const tag: string | null = req.params.repo.match(/@.+$/) ? req.params.repo.substring(req.params.repo.indexOf("@")).replace("@", "") : null;
  const source: string = req.query.source;
  if (author && repo && !source) {
    if (!tag) {
      // Latest
      // /:author/:repo
      const params_arr = { author: author, repo: repo };
      await latest(params_arr)
        .then((i: string): void => {
          res.redirect(i);
        })
        .catch((e: Error): void => {
          res.setStatus(404).send({ Error: e.message });
        });
    } else {
      // Tagging
      // /:author/:repo@tag
      const params_arr = { author: author, repo: repo, tag: tag };
      await tagging(params_arr)
        .then((i: string): void => {
          res.redirect(i);
        })
        .catch((e: Error): void => {
          res.setStatus(404).send({ Error: e.message });
        });
    }
  } else if (author && repo && source) {
    if (!tag) {
      // Latest
      // /:author/:repo?source=zip
      const params_arr = { author: author, repo: repo, source: source };
      await latest(params_arr)
        .then((i: string): void => {
          res.redirect(i);
        })
        .catch((e: Error): void => {
          res.setStatus(404).send({ Error: e.message });
        });
    } else {
      // Tagging
      // /:author/:repo@tag?source=zip
      const params_arr = { author: author, repo: repo, tag: tag, source: source };
      await tagging(params_arr)
        .then((i: string): void => {
          res.redirect(i);
        })
        .catch((e: Error): void => {
          res.setStatus(404).send({ Error: e.message });
        });
    }
  }
});

// Download assets
app.get("/:author/:repo/:assets_name", async (req, res): Promise<void> => {
  const author: string = req.params.author;
  const repo: string = req.params.repo.match(/@.+$/) ? req.params.repo.substring(0, req.params.repo.indexOf("@")) : req.params.repo;
  const tag: string | null = req.params.repo.match(/@.+$/) ? req.params.repo.substring(req.params.repo.indexOf("@")).replace("@", "") : null;
  const assets_name: string = req.params.assets_name;
  if (author && repo && assets_name) {
    if (!tag) {
      // Latest
      // /:author/:repo/:assets_name
      const params_arr = { author: author, repo: repo, assets_name: assets_name };
      await latest(params_arr)
        .then((i: string): void => {
          res.redirect(i);
        })
        .catch((e: Error): void => {
          res.setStatus(404).send({ Error: e.message });
        });
    } else {
      // Tagging
      // /:author/:repo@tag/:assets_name
      const params_arr = { author: author, repo: repo, tag: tag, assets_name: assets_name };
      await tagging(params_arr)
        .then((i: string): void => {
          res.redirect(i);
        })
        .catch((e: Error): void => {
          res.setStatus(404).send({ Error: e.message });
        });
    }
  }
});

app.listen(8080);
