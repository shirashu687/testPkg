# @YOUR_GITHUB_USERNAME/my-first-package

GitHub Packages に公開するための最小構成 npm パッケージのサンプルです。

---

## インストール

### 1. `.npmrc` の設定

プロジェクトルートまたはホームディレクトリの `~/.npmrc` に以下を追記します。

```
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

> `YOUR_GITHUB_TOKEN` には `read:packages` スコープを持つ Personal Access Token を指定してください。

### 2. インストール

```bash
npm install @YOUR_GITHUB_USERNAME/my-first-package
```

---

## 使用例

```js
const { greet } = require('@YOUR_GITHUB_USERNAME/my-first-package');

console.log(greet('World'));  // => "Hello, World!"
console.log(greet('Alice'));  // => "Hello, Alice!"
```

---

## API

### `greet(name: string): string`

| 引数   | 型       | 説明             |
| ------ | -------- | ---------------- |
| `name` | `string` | 挨拶する相手の名前 |

**Returns:** `"Hello, <name>!"` 形式の文字列

**Throws:** `TypeError` — `name` が空文字または文字列以外の場合

---

## npm publish 手順

```bash
# 1. GitHub Packages レジストリにログイン
npm login --registry=https://npm.pkg.github.com

# 2. package.json の name を実際のユーザー名に書き換える
#    "@YOUR_GITHUB_USERNAME/my-first-package" → "@octocat/my-first-package"

# 3. テスト実行
npm test

# 4. 公開
npm publish
```

---

## TypeScript での利用例（型定義付き）

```ts
// index.d.ts（手動で追加、または別途 TypeScript 版を参照）
export declare function greet(name: string): string;
```

```ts
import { greet } from '@YOUR_GITHUB_USERNAME/my-first-package';

const message: string = greet('TypeScript');
console.log(message); // => "Hello, TypeScript!"
```

TypeScript 完全版は [`typescript/`](./typescript/) ディレクトリを参照してください（任意）。

---

## ライセンス

MIT
