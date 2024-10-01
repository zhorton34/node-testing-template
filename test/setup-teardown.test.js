import { test } from 'node:test';
import assert from 'node:assert/strict';

let testObject;

test('Setup and teardown', async (t) => {
  t.beforeEach(() => {
    testObject = { key: 'value' };
  });

  t.afterEach(() => {
    testObject = null;
  });

  await t.test('Test using setup object', () => {
    assert.deepStrictEqual(testObject, { key: 'value' });
  });
});