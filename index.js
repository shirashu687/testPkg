/**
 * @YOUR_GITHUB_USERNAME/my-first-package
 *
 * 【npm publish までの手順】
 *
 * 1. GitHub で Personal Access Token (classic) を発行
 *    - Settings > Developer settings > Personal access tokens > Tokens (classic)
 *    - 必要なスコープ: write:packages, read:packages, delete:packages, repo
 *
 * 2. npm にログイン（GitHub Packages レジストリ向け）
 *    $ npm login --registry=https://npm.pkg.github.com
 *      Username: YOUR_GITHUB_USERNAME
 *      Password: <上記で発行した Token>
 *      Email:    your@email.com
 *
 *    または ~/.npmrc に直接記載する方法:
 *    //npm.pkg.github.com/:_authToken=YOUR_TOKEN
 *
 * 3. package.json の name を実際のユーザー名に書き換える
 *    例: "@YOUR_GITHUB_USERNAME/my-first-package"
 *            ↓
 *        "@octocat/my-first-package"
 *
 * 4. パッケージを公開
 *    $ npm publish
 *
 * 5. GitHub リポジトリの Packages タブで公開を確認
 */

'use strict';

/**
 * 名前を受け取って挨拶文字列を返す。
 *
 * @param {string} name - 挨拶する相手の名前
 * @returns {string} 挨拶メッセージ
 *
 * @example
 * const { greet } = require('@YOUR_GITHUB_USERNAME/my-first-package');
 * console.log(greet('World')); // => "Hello, World!"
 */
function greet(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new TypeError('name must be a non-empty string');
  }
  return `Hello, ${name.trim()}!`;
}

module.exports = { greet };
