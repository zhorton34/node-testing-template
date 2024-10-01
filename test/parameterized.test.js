import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from '../main.js';

test('Parameterized add function', async (t) => {
  const testCases = [
    { a: 1, b: 2, expected: 3 },
    { a: -1, b: 1, expected: 0 },
    { a: 0, b: 0, expected: 0 },
    { a: 100, b: 200, expected: 300 }
  ];

  for (const { a, b, expected } of testCases) {
    await t.test(`add(${a}, ${b}) should equal ${expected}`, () => {
      assert.strictEqual(add(a, b), expected);
    });
  }
});