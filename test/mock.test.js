import { test } from 'node:test';
import assert from 'node:assert/strict';

test('mocking example', (t) => {
    const originalFunction = (a, b) => a * b;
    const mockFn = t.mock.fn(originalFunction);

    const result = mockFn(2, 3);
    assert.strictEqual(result, 6);
    assert.strictEqual(mockFn.mock.callCount(), 1);

    mockFn.mock.mockImplementation((a, b) => a + b);
    const newResult = mockFn(2, 3);
    assert.strictEqual(newResult, 5);
});
