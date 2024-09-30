import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { add, subtract } from '../src/myModule.js';

describe('Math operations', () => {
    it('should add numbers correctly', () => {
        assert.strictEqual(add(2, 2), 4);
    });

    it('should subtract numbers correctly', () => {
        assert.strictEqual(subtract(5, 2), 3);
    });
});
