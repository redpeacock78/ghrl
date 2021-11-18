// deno-lint-ignore-file no-inferrable-types
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
      .card-content {
        padding-left: 3vmin !important;
        padding-right: 3vmin !important;
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
      .list > li{
        list-style-type: disc !important;
        display: list-item;
        margin-left: 1.5em;
        padding: 0;
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
          <ul class="left" style="padding-left:15px;">
            <li>
              <img src="https://i.imgur.com/xu1p0qP.webp" height="45"></img>
            </li>
          </ul>
          <ul class="right">
            <li>
              <a href="https://github.com/redpeacock78/ghrl">
                <svg id="i-github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="45" height="45">
                  <path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z">
                  </path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container lighten-5">
        <div class="card">
          <div class="card-content">
            ${
    markup.content
      .replace(/<code>/g, '<code class="hljs">')
      .replace(/<pre>/g, '<div class="code-container">\n<pre>')
      .replace(/<\/pre>/g, "</pre>\n</div>")
      .replace(/<ul>/g, '<ul class="list">')
      .replace(/<h2/g, "<h4")
      .replace(/<\/h2/g, "</h4")
      .replace(/<h3/g, "<h5")
      .replace(/<\/h3/g, "</h5")
  }
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
