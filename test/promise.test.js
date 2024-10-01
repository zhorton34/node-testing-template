import { test } from 'node:test';
import assert from 'node:assert/strict';

function asyncFunction() {
  return new Promise(resolve => setTimeout(() => resolve('result'), 100));
}

test('Testing promises', async () => {
  const result = await asyncFunction();
  assert.strictEqual(result, 'result');
});