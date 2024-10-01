import { test } from 'node:test';
import assert from 'node:assert/strict';

test('Mocking examples', async (t) => {
    await t.test('should mock a simple function', (t) => {
        const originalFunction = (a, b) => a * b;
        const mockFn = (...args) => {
            mockFn.calls.push(args);
            return mockFn.implementation(...args);
        };
        mockFn.calls = [];
        mockFn.implementation = originalFunction;

        const result = mockFn(2, 3);
        assert.strictEqual(result, 6);
        assert.strictEqual(mockFn.calls.length, 1);

        mockFn.implementation = (a, b) => a + b;
        const newResult = mockFn(2, 3);
        assert.strictEqual(newResult, 5);
    });

    await t.test('should spy on method calls', (t) => {
        const object = {
            method: function(arg) {
                return arg * 2;
            }
        };

        const originalMethod = object.method;
        object.method = function(...args) {
            object.method.calls.push(args);
            return originalMethod.apply(this, args);
        };
        object.method.calls = [];

        object.method(3);
        object.method(4);

        assert.strictEqual(object.method.calls.length, 2);
        assert.deepStrictEqual(object.method.calls[0], [3]);
        assert.deepStrictEqual(object.method.calls[1], [4]);
    });

    await t.test('should mock module dependencies', async (t) => {
        const mockFs = {
            readFile: (path, options, callback) => {
                mockFs.readFile.calls.push([path, options]);
                callback(null, 'mocked file content');
            }
        };
        mockFs.readFile.calls = [];

        // This is a simplified mock, as we can't easily mock ES modules
        const { readFile } = mockFs;
        
        await new Promise((resolve) => {
            readFile('nonexistent.txt', 'utf8', (err, data) => {
                assert.strictEqual(data, 'mocked file content');
                resolve();
            });
        });

        assert.strictEqual(mockFs.readFile.calls.length, 1);
    });

    await t.test('should mock and restore timers', (t) => {
        const originalSetTimeout = setTimeout;
        let mockTime = 0;
        globalThis.setTimeout = (callback, delay) => {
            mockTime += delay;
            callback();
        };

        let called = false;
        setTimeout(() => {
            called = true;
        }, 1000);

        assert.strictEqual(called, true);
        assert.strictEqual(mockTime, 1000);

        globalThis.setTimeout = originalSetTimeout;
    });

    await t.test('should mock console methods', (t) => {
        const originalConsoleLog = console.log;
        const mockConsoleLog = {
            calls: [],
            log: (...args) => {
                mockConsoleLog.calls.push(args);
            }
        };
        console.log = mockConsoleLog.log;

        console.log('Test message');

        assert.strictEqual(mockConsoleLog.calls.length, 1);
        assert.deepStrictEqual(mockConsoleLog.calls[0], ['Test message']);

        console.log = originalConsoleLog;
    });
});
