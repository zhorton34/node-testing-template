import { test } from 'node:test';
import assert from 'node:assert/strict';

function throwError() {
  throw new Error('Test error');
}

test('Testing error throwing', () => {
  assert.throws(throwError, { name: 'Error', message: 'Test error' });
});