import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Readable, Writable } from 'node:stream';

test('stream test', async (t) => {
  const readable = new Readable({
    read() {
      this.push('hello');
      this.push('world');
      this.push(null);
    }
  });

  let data = '';
  const writable = new Writable({
    write(chunk, encoding, callback) {
      data += chunk.toString();
      callback();
    }
  });

  readable.pipe(writable);

  await new Promise((resolve) => {
    writable.on('finish', () => {
      assert.strictEqual(data, 'helloworld');
      resolve();
    });
  });
});