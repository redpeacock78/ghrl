import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

export async function index(): Promise<string> {
  const decoder = new TextDecoder("utf-8");
  const readme = await Deno.readFile("./README.md");
  const markdown = decoder.decode(readme);
  const markup = Marked.parse(markdown);
  const result: string = `<link href="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github-dark.min.css">
    <body class=".dark-mode dark-mode">
      <div class="page-wrapper">
        <div class="content-wrapper">
          <div class="container-fluid">
            <div class="content">
              <div class="card">
                  ${markup.content.replace(/<code>/g, '<code class="hljs">').replace('<code class="lang-bash">', '<code class="bash hljs">')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>`;
  return result;
}
