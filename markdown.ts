import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

export async function index(): Promise<string> {
  const decoder = new TextDecoder("utf-8");
  const readme = await Deno.readFile("./README.md");
  const markdown = decoder.decode(readme);
  const markup = Marked.parse(markdown);
  const result: string = `<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/base16/solarized-dark.min.css">
    <meta property="og:title" content="Ghrl -A service to retrieve 'Github Releases' assets through Deno Deploy🦕-" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ghrl.tk/" />
    <meta property="og:site_name" content="Ghrl -A service to retrieve 'Github Releases' assets through Deno Deploy🦕" />
    <meta property="og:image" content="https://i.imgur.com/IeeR9d7.png" />
    <meta property="og:description" content="A service to retrieve 'Github Releases' assets through Deno Deploy🦕" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@kazuki_199778" />
    <meta name="twitter:player" content="@kazuki_199778" />
    <meta name="twitter:tilte" content="Ghrl -A service to retrieve 'Github Releases' assets through Deno Deploy🦕-" />
    <meta name="twitter:image" content="https://i.imgur.com/IeeR9d7.png" />
    <meta name="twitter:description" content="A service to retrieve 'Github Releases' assets through Deno Deploy🦕" />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🦕</text></svg>">
    <title>Ghrl -A service to retrieve 'Github Releases' assets through Deno Deploy🦕-</title>
    <style>
      body.dark {
        background-color: #241818;
      }
      .card {
        background-color: #444;
      }
      nav {
        height: 45px;
        background-color: #444;
      }
      h1, h2, h3, h4, h5, p, li {
        color: #d1d1d1;
      }
      h1 {
        margin-top: 0;
      }
      .list {
        padding-left: 1em !important;
        list-style-type: '' !important;
        display: list-item;
      }
      code {
        word-break: break-all;
      }
      footer {
        text-align: center;
        margin-top: 2rem;
      }
    </style>
  </head>
    <body class="dark">
      <nav>
        <div class="nav-wrapper">
          <ul class="right">
            <li>
              <a href="https://deno.land/">
                <img src="https://camo.githubusercontent.com/9e2f7b04a40d3613e2398cae66d73e953d73a4a3800bfc66d7b04ab869c0eda4/68747470733a2f2f64656e6f6c69622e6769746875622e696f2f686967682d7265732d64656e6f2d6c6f676f2f64656e6f5f68725f636972636c652e706e67" alt="deno" height="100%">
              </a>
            </li>
            <li>
              <a href="https://github.com/redpeacock78/ghrl">
                <img src="https://i.imgur.com/cszORZ3.png" alt="github" height="90%" style="padding-top: 10%">
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container lighten-5">
        <div class="card">
          <div class="card-content">
            ${markup.content
              .replace(/<code>/g, '<code class="hljs">')
              .replace(/<pre>/g, '<div class="code-container">\n<pre>')
              .replace(/<\/pre>/g, "</pre>\n</div>")
              .replace(/<ul>/g, '<ul class="list">')
              .replace(/<h2/g, "<h4")
              .replace(/<\/h2/g, "</h4")
              .replace(/<h3/g, "<h5")
              .replace(/<\/h3/g, "</h5")}
            <footer>
              <p>
                © 2021, <a href="https://twitter.com/kazuki_199778">redpeacock78</a>, 
                <a href="https://github.com/redpeacock78/ghrl/blob/master/LICENSE">MIT License</a>, 
                <a href="https://github.com/redpeacock78/ghrl">Repository</a>, 
                <a href="https://stats.uptimerobot.com/9jVOwFz21w">Status</a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
  </html>`;
  return result;
}
