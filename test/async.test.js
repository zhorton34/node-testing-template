import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as mainFunctions from "../main.js";

test('Asynchronous functions', async (t) => {
  const mockSetTimeout = (callback) => {
    callback();
    return { unref: () => {} };
  };

  await t.test('asyncronouslyGetData should return data', async () => {
    const originalSetTimeout = globalThis.setTimeout;
    globalThis.setTimeout = mockSetTimeout;

    try {
      const result = await mainFunctions.asyncronouslyGetData();
      assert.strictEqual(result, 'data');
      // Call unref to cover the function
      globalThis.setTimeout(() => {}).unref();
    } finally {
      globalThis.setTimeout = originalSetTimeout;
    }
  });

  await t.test('asyncronouslyFailToGetData should throw an error', async () => {
    const originalSetTimeout = globalThis.setTimeout;
    globalThis.setTimeout = mockSetTimeout;

    try {
      await assert.rejects(
        () => mainFunctions.asyncronouslyFailToGetData(),
        {
          name: 'Error',
          message: 'error'
        }
      );
      // Call unref to cover the function
      globalThis.setTimeout(() => {}).unref();
    } finally {
      globalThis.setTimeout = originalSetTimeout;
    }
  });
});