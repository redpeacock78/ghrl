import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

export async function index(): Promise<string> {
  const decoder = new TextDecoder("utf-8");
  const readme = await Deno.readFile("./README.md");
  const markdown = decoder.decode(readme);
  const markup = Marked.parse(markdown);
  const result: string = `
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
    <link href="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github-dark.min.css">
    <meta property="og:title" content="Ghrl" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.ghrl.tk/" />
    <meta property="og:site_name" content="Ghrl -A service to retrieve Github releases assets through Deno🦕" />
    <meta property="og:image" content="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🦕</text></svg>" />
    <meta property="og:description" content="A service to retrieve Github releases assets through Deno🦕- />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@kazuki_199778" />
    <meta name="twitter:player" content="@kazuki_199778" />
    <meta name="twitter:tilte" content="Ghrl -A service to retrieve Github releases assets through Deno🦕" />
    <meta name="twitter:image" content="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🦕</text></svg>" />
    <meta name="twitter:description" content="A service to retrieve Github releases assets through Deno🦕" />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🦕</text></svg>">
    <title>Ghrl -A service to retrieve Github releases assets through Deno🦕-</title>
  </head>
    <body class="dark-mode">
      <div class="page-wrapper">
        <div class="content-wrapper">
          <div class="container-fluid">
            <div class="mw-full">
              <div class="card">
                <div class="content">
                  ${markup.content
                    .replace(/<code>/g, '<code class="hljs">')
                    .replace(/<pre>/g, '<div class="code-container">\n<pre>')
                    .replace(/<\/pre>/g, "</pre>\n</div>")
                    .replace('<code class="lang-bash">', '<code class="bash hljs">')
                    .replace(/<p>/g, '<p class="text-justify font-size-14">')
                    .replace(/<h(2|3) id="-.*">/g, '<h2 class="content-title">')}
                  <footer style="text-align: center;">
                    <p>
                      © 2021, <a href="https://github.com/redpeacock78">redpeacock78</a>, 
                      <a href="https://github.com/redpeacock78/ghrl/blob/master/LICENSE">MIT License</a>, 
                      <a href="https://github.com/redpeacock78/ghrl">Repository</a>
                    </p>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
  `;
  return result;
}
