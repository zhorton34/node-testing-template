import { test } from 'node:test';
import assert from 'node:assert/strict';

test('this test will run', (t) => {
  assert.strictEqual(1, 1);
});

// We'll use a condition to determine whether to skip or run this test
const shouldSkip = process.env.SKIP_TEST === 'true';

if (shouldSkip) {
  test.skip('this test will be skipped', (t) => {
    assert.strictEqual(1, 2);
  });
} else {
  test('this test will not be skipped', (t) => {
    assert.strictEqual(2, 2);
  });
}

// Uncomment the following to run only this test
// test.only('only this test will run', (t) => {
//   assert.strictEqual(2, 2);
// });

// This ensures the 'only' function is covered
test.only.toString();