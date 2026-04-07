'use strict';

const { greet } = require('./index');

// 簡易テスト
const cases = [
  { input: 'World',   expected: 'Hello, World!' },
  { input: '  Alice', expected: 'Hello, Alice!' },
];

let passed = 0;
for (const { input, expected } of cases) {
  const result = greet(input);
  if (result === expected) {
    console.log(`✅ greet("${input}") => "${result}"`);
    passed++;
  } else {
    console.error(`❌ greet("${input}") => "${result}" (expected "${expected}")`);
  }
}

// エラーケース
try {
  greet('');
  console.error('❌ Should have thrown for empty string');
} catch (e) {
  console.log(`✅ Correctly threw for empty string: ${e.message}`);
  passed++;
}

console.log(`\n${passed}/${cases.length + 1} tests passed`);
process.exit(passed === cases.length + 1 ? 0 : 1);
