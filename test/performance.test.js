import { test } from 'node:test';
import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';

function slowFunction() {
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += i;
  }
  return result;
}

test('Performance test', () => {
  const start = performance.now();
  slowFunction();
  const end = performance.now();
  const executionTime = end - start;
  
  assert.ok(executionTime < 500, `Function took too long: ${executionTime}ms`);
});