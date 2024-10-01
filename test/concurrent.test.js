import { test } from 'node:test';
import assert from 'node:assert/strict';

test('concurrent tests', async (t) => {
  await t.test('test 1', async (t) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    assert.strictEqual(1, 1);
  });

  await t.test('test 2', async (t) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    assert.strictEqual(2, 2);
  });
});