import { test } from 'node:test';
import assert from 'node:assert/strict';

// Assume this is your actual API call function
async function fetchUserData(userId) {
  // In reality, this would make an HTTP request
  throw new Error('Not implemented');
}

// Mock implementation
async function mockFetchUserData(userId) {
  return { id: userId, name: 'John Doe' };
}

test('Testing with mocked external dependency', async (t) => {
  const originalFetchUserData = globalThis.fetchUserData;
  globalThis.fetchUserData = mockFetchUserData;

  try {
    const userData = await globalThis.fetchUserData(123);
    assert.deepStrictEqual(userData, { id: 123, name: 'John Doe' });

    // Test the original function (to cover the throw statement)
    await t.test('Original function throws', async () => {
      globalThis.fetchUserData = fetchUserData;
      await assert.rejects(
        () => globalThis.fetchUserData(123),
        { message: 'Not implemented' }
      );
    });
  } finally {
    globalThis.fetchUserData = originalFetchUserData;
  }
});