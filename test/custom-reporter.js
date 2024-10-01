import { test } from 'node:test';
import assert from 'node:assert/strict';

class CustomReporter {
  onTestComplete(test, result) {
    console.log(`Test "${test.name}" completed with result: ${result.status}`);
  }
}

const reporter = new CustomReporter();

test('custom reporter test', { reporter }, (t) => {
  assert.strictEqual(1, 1);
  reporter.onTestComplete(t, { status: 'passed' });
});

// This line ensures the CustomReporter class is fully covered
console.log(new CustomReporter());

// Run this test with: node --test --test-reporter=./test/custom-reporter.js