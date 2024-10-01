import { test } from 'node:test';
import assert from 'node:assert/strict';

test('test with before and after hooks', async (t) => {
  let value;

  t.before(() => {
    value = 1;
  });

  t.after(() => {
    value = undefined;
  });

  await t.test('subtest 1', (t) => {
    assert.strictEqual(value, 1);
  });

  await t.test('subtest 2', (t) => {
    assert.strictEqual(value, 1);
  });
});