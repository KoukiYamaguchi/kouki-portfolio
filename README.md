# Portfolio Website

私の個人のポートフォリオサイトのソースコードです。
TypeScript, HTML, CSS (Vanilla) を使用して構築し、GitHub Actions等のCI/CDを意識した構成にしています。

👉 **Live Demo:** [https://koukiyamaguchi.github.io/portfolio/](https://koukiyamaguchi.github.io/portfolio/)

## Tech Stack

- **Frontend:** HTML5, CSS3, TypeScript
- **Design:** Fully Responsive (Mobile/Desktop), Dark/Modern UI
- **Build Tool:** npm, tsc (TypeScript Compiler)
- **Infrastructure:** GitHub Pages

## Features

- **TypeScript Implementation:**
  - 型安全性（Type Safety）を意識したDOM操作の実装
  - 言語切り替え機能（日本語 ⇔ 英語）の状態管理
- **Modern CSS:**
  - CSS Variables (`:root`) による配色管理
  - Flexbox & Grid Layout によるレスポンシブ対応
  - CSS Animations によるマイクロインタラクション
- **Security & UX:**
  - メールアドレスの難読化とクリップボードコピー機能の実装

## Directory Structure
```text
portfolio/
├── index.html       # Entry point
├── css/
│   └── style.css    # Stylesheet
├── src/
│   └── main.ts      # TypeScript source
├── js/
│   └── main.js      # Compiled JavaScript (Generated)
└── tsconfig.json    # TypeScript configuration
```


## Local Development

このリポジトリをローカルで動かす手順です。

```bash
# 1. Clone the repository
git clone [https://github.com/KoukiYamaguchi/portfolio.git](https://github.com/KoukiYamaguchi/portfolio.git)

# 2. Install dependencies
npm install

# 3. Compile TypeScript
npm run build

# 4. Open index.html in your browser
```

## Author
Koki Yamaguchi(email: yamaguchi.koki.dev@gmail.com)