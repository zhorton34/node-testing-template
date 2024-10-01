import { test } from 'node:test';
import * as mainFunctions from '../main.js';
import { strict as assert } from 'node:assert';
test('main.js functions', async (t) => {
  await t.test('multiplyNumbers', () => {
    assert.equal(mainFunctions.multiply(2, 3), 6);
  });

  await t.test('divideNumbers', () => {
    assert.equal(mainFunctions.divide(6, 2), 3);
  });

  await t.test('powerOf', () => {
    assert.equal(mainFunctions.power(2, 3), 8);
  });

  await t.test('squareRoot', () => {
    assert.equal(mainFunctions.squareRoot(9), 3);
  });

  await t.test('factorial', () => {
    assert.equal(mainFunctions.factorial(5), 120);
    assert.equal(mainFunctions.factorial(0), 1);
    assert.equal(mainFunctions.factorial(1), 1);
  });

  await t.test('fibonacci', () => {
    assert.deepEqual(mainFunctions.fibonacci(5), [0, 1, 1, 2, 3]);
    assert.deepEqual(mainFunctions.fibonacci(8), [0, 1, 1, 2, 3, 5, 8, 13]);
  });

  await t.test('isPrime', () => {
    assert.equal(mainFunctions.isPrime(7), true);
    assert.equal(mainFunctions.isPrime(4), false);
    assert.equal(mainFunctions.isPrime(1), false);
  });

  await t.test('randomNumber', () => {
    const min = 1;
    const max = 10;
    const randomNum = mainFunctions.randomNumber(min, max);
    assert.ok(randomNum >= min && randomNum <= max);
  });

  await t.test('add', () => {
    assert.equal(mainFunctions.add(2, 3), 5);
  });

  await t.test('subtract', () => {
    assert.equal(mainFunctions.subtract(5, 3), 2);
  });

  await t.test('multiply', () => {
    assert.equal(mainFunctions.multiply(2, 3), 6);
  });

  await t.test('divide', () => {
    assert.equal(mainFunctions.divide(6, 2), 3);
  });

  await t.test('square', () => {
    assert.equal(mainFunctions.square(4), 16);
  });

  await t.test('cube', () => {
    assert.equal(mainFunctions.cube(3), 27);
  });

  await t.test('power', () => {
    assert.equal(mainFunctions.power(2, 3), 8);
  });

  await t.test('cubeRoot', () => {
    assert.equal(mainFunctions.cubeRoot(27), 3);
  });

  await t.test('logarithm', () => {
    assert.equal(mainFunctions.logarithm(Math.E), 1);
  });

  await t.test('exponential', () => {
    assert.equal(mainFunctions.exponential(0), 1);
  });

  await t.test('sine', () => {
    assert.equal(mainFunctions.sine(Math.PI / 2), 1);
  });

  await t.test('cosine', () => {
    assert.equal(mainFunctions.cosine(0), 1);
  });

  await t.test('tangent', () => {
    assert.equal(mainFunctions.tangent(0), 0);
  });

  await t.test('arcSine', () => {
    assert.equal(mainFunctions.arcSine(1), Math.PI / 2);
  });

  await t.test('arcCosine', () => {
    assert.equal(mainFunctions.arcCosine(1), 0);
  });

  await t.test('arcTangent', () => {
    assert.equal(mainFunctions.arcTangent(0), 0);
  });

  await t.test('hyperbolicSine', () => {
    assert.equal(mainFunctions.hyperbolicSine(0), 0);
  });

  await t.test('hyperbolicCosine', () => {
    assert.equal(mainFunctions.hyperbolicCosine(0), 1);
  });

  await t.test('hyperbolicTangent', () => {
    assert.equal(mainFunctions.hyperbolicTangent(0), 0);
  });

  await t.test('arcHyperbolicSine', () => {
    assert.equal(mainFunctions.arcHyperbolicSine(0), 0);
  });

  await t.test('arcHyperbolicCosine', () => {
    assert.equal(mainFunctions.arcHyperbolicCosine(1), 0);
  });

  await t.test('arcHyperbolicTangent', () => {
    assert.equal(mainFunctions.arcHyperbolicTangent(0), 0);
  });

  await t.test('round', () => {
    assert.equal(mainFunctions.round(3.7), 4);
    assert.equal(mainFunctions.round(3.2), 3);
  });

  await t.test('floor', () => {
    assert.equal(mainFunctions.floor(3.7), 3);
    assert.equal(mainFunctions.floor(3.2), 3);
  });

  await t.test('max', () => {
    assert.equal(mainFunctions.max(3, 7), 7);
    assert.equal(mainFunctions.max(3, 2), 3);
  });
});


