<img src="https://i.imgur.com/xu1p0qP.webp" height="200px" width="50%" style="margin-bottom:10px;object-fit:contain;"></img>  
[![deno version](https://img.shields.io/badge/deno-^1.16.0-lightgrey?logo=deno)](https://github.com/denoland/deno)  [![uptime](https://img.shields.io/uptimerobot/ratio/7/m789748604-54a82c6e7bf4fdd20e0a56ad)](https://stats.uptimerobot.com/9jVOwFz21w) [![GitHub](https://img.shields.io/github/license/redpeacock78/ghrl)](https://github.com/redpeacock78/ghrl/blob/master/LICENSE)  
A service to retrieve 'Github Releases' assets through [Deno Deploy](https://deno.com/deploy/)🦕  
What "**Ghrl**" means is "**G**it**h**ub **R**e**l**eases".

## 🛠 Usage
- 📜 Download Source Codes  
  `https://ghrl.tk/:owner/:repo[@tag][?source=zip]`  
  - Redirect to `https://github.com/:owner/:repo/archive/refs/tags/[latest or tag].[tar.gz or zip]`
  - The absence of `?source=zip` represents a `tar.gz`.
- 📦 Download Other Assets  
  `https://ghrl.tk/:owner/:repo[@tag]/:assets_name`  
  - Redirect to `https://github.com/:owner/:repo/releases/download/[latest or tag]/:assets_name`

### 📄 Example
[redpeacock78/base85](https://github.com/redpeacock78/base85)  
- 📜 Download Source Codes
  ```bash
  # Download Latest Source(tar.gz)
  $ curl -sSfL --retry 5 "https://ghrl.tk/redpeacock78/base85" -o source.tar.gz

  # Download v0.0.11 Source(tar.gz)
  $ curl -sSfL --retry 5 "https://ghrl.tk/redpeacock78/base85@v0.0.11" -o source.tar.gz

  # Download Latest Source(zip)
  $ curl -sSfL --retry 5 "https://ghrl.tk/redpeacock78/base85?source=zip" -o source.zip

  # Download v0.0.11 Source(zip)
  $ curl -sSfL --retry 5 "https://ghrl.tk/redpeacock78/base85@v0.0.11?source=zip" -o source.zip
  ```
- 📦 Download Other Assets
  ```bash
  # Download Latest Other Assets
  $ curl -sSfL --retry 5 "https://ghrl.tk/redpeacock78/base85/base85-linux-x86" -o base85-linux-x86

  # Download v0.0.11 Other Assets
  $ curl -sSfL --retry 5 "https://ghrl.tk/redpeacock78/base85@v0.0.11/base85-linux-x86" -o base85-linux-x86
  ```

## 📣 Contribution
Please Create [Issues](https://github.com/redpeacock78/ghrl/issues/new), or Pull Requests.

## 🥝 License
This source code is licensed [MIT](https://github.com/redpeacock78/ghrl/blob/master/LICENSE).