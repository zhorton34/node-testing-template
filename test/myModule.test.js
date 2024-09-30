import { test, before, after, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { add, subtract } from '../src/myModule.js';

let sharedValue = 0;

before(() => {
    // Runs once before all tests
    console.log('Setup before all tests');
});

after(() => {
    // Runs once after all tests
    console.log('Teardown after all tests');
});

beforeEach(() => {
    // Runs before each test
    sharedValue = 0;
});

afterEach(() => {
    // Runs after each test
    // Clean up if necessary
});

test('add() should return the sum of two numbers', () => {
    const result = add(2, 3);
    assert.strictEqual(result, 5);
});

test('subtract() should return the difference of two numbers', () => {
    const result = subtract(5, 3);
    assert.strictEqual(result, 2);
});

test('async test example', async () => {
    const result = await Promise.resolve(add(10, 20));
    assert.strictEqual(result, 30);
});

test('skipped test', { skip: true }, () => {
    // This test will be skipped
});

test('TODO test', { todo: true }, () => {
    // This test is marked as TODO
});

test('only this test runs', { only: true }, () => {
    assert.strictEqual(add(1, 1), 2);
});

test('test with plan', (t) => {
    t.plan(2);
    t.test('subtest 1', (t) => {
        t.plan(1);
        assert.strictEqual(add(1, 2), 3);
    });
    t.test('subtest 2', (t) => {
        t.plan(1);
        assert.strictEqual(subtract(5, 2), 3);
    });
});

