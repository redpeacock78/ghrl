# 🦕 Ghrl
[![deno version](https://img.shields.io/badge/deno-^1.16.0-lightgrey?logo=deno)](https://github.com/denoland/deno) [![Run on Repl.it](https://repl.it/badge/github/redpeacock78/ghrl)](https://repl.it/) [![Website](https://img.shields.io/website?down_color=red&down_message=down&up_color=green&up_message=up&url=https%3A%2F%2Fwww.ghrl.tk%2F)](https://www.ghrl.tk/) [![GitHub](https://img.shields.io/github/license/redpeacock78/ghrl)](https://github.com/redpeacock78/ghrl/blob/master/LICENSE)  
A service to retrieve Github releases assets through Deno🦕  
What "Ghrl" means is "**G**it**h**ub **R**e**l**eases".

## 🛠 Usage
- 📜 Download Source  
  `https://www.ghrl.tk/:owner/:repo[@tag][?source=zip]`  
  - Redirect to `https://github.com/:owner/:repo/archive/refs/tags/[latest or tag].[tar.gz or zip]`
  - The absence of `?source=zip` represents a `tar.gz`.
- 📦 Download Other Assets  
  `https://www.ghrl.tk/:owner/:repo[@tag]/:assets_name`  
  - Redirect to `https://github.com/:owner/:repo/releases/download/[latest or tag]/:assets_name`

### 📄 Example
- [redpeacock78/base85](https://github.com/redpeacock78/base85)  

```bash
# Download Latest Source(tar.gz)
$ curl -sSfL --retry 5 https://www.ghrl.tk/redpeacock78/base85 -o source.tar.gz

# Download v0.0.11 Source(tar.gz)
$ curl -sSfL --retry 5 https://www.ghrl.tk/redpeacock78/base85@v0.0.11 -o source.tar.gz

# Download Latest Source(zip)
$ curl -sSfL --retry 5 https://www.ghrl.tk/redpeacock78/base85?source=zip -o source.zip

# Download v0.0.11 Source(zip)
$ curl -sSfL --retry 5 https://www.ghrl.tk/redpeacock78/base85@v0.0.11?source=zip -o source.zip

# Download Latest Other Assets
$ curl -sSfL --retry 5 https://www.ghrl.tk/redpeacock78/base85/base85-linux-x86 -o base85-linux-x86

# Download v0.0.11 Other Assets
$ curl -sSfL --retry 5 https://www.ghrl.tk/redpeacock78/base85@v0.0.11/base85-linux-x86 -o base85-linux-x86
```

## 🥝 Lisence
This source code is licensed [MIT](https://github.com/redpeacock78/ghrl/blob/master/LICENSE).