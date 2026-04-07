/**
 * 名前を受け取って挨拶文字列を返す。
 *
 * @param name - 挨拶する相手の名前
 * @returns `"Hello, <name>!"` 形式の文字列
 *
 * @example
 * import { greet } from '@YOUR_GITHUB_USERNAME/my-first-package';
 * console.log(greet('World')); // => "Hello, World!"
 */
export function greet(name: string): string {
  if (name.trim() === '') {
    throw new TypeError('name must be a non-empty string');
  }
  return `Hello, ${name.trim()}!`;
}
