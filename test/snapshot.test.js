import { test } from 'node:test';
import assert from 'node:assert/strict';

function complexObject() {
  return {
    date: new Date('2023-01-01'),
    array: [1, 2, 3],
    nested: { a: 1, b: 2 }
  };
}

function matchComplexObject(actual, expected) {
  if (!expected) {
    // If there's no snapshot yet, consider it a match and let the update happen
    return;
  }
  assert.strictEqual(actual.date instanceof Date, true);
  assert.deepStrictEqual(actual.array, expected.array);
  assert.deepStrictEqual(actual.nested, expected.nested);
}

test('Snapshot test', async (t) => {
  await t.test('complexObject matches snapshot (no existing snapshot)', (t) => {
    const actual = complexObject();
    matchComplexObject(actual, undefined);
  });

  await t.test('complexObject matches snapshot (with existing snapshot)', (t) => {
    const actual = complexObject();
    matchComplexObject(actual, t.snapshot);
  });

  // Add this test to cover the case where the snapshot exists but doesn't match
  await t.test('complexObject does not match incorrect snapshot', (t) => {
    const actual = complexObject();
    const incorrectSnapshot = {
      date: new Date('2022-01-01'),
      array: [4, 5, 6],
      nested: { c: 3, d: 4 }
    };
    assert.throws(() => matchComplexObject(actual, incorrectSnapshot), assert.AssertionError);
  });
});