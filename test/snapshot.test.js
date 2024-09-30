import { test } from 'node:test';
import assert from 'node:assert/strict';

test('snapshot test example', (t) => {
    const data = { foo: 'bar', count: 42 };
    t.assert.snapshot(data);
});
