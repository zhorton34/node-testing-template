import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import * as mainFunctions from "../main.js"

describe('Math operations', () => {
    it('should add numbers correctly', () => {
        assert.strictEqual(mainFunctions.add(2, 2), 4);
    });

    it('should subtract numbers correctly', () => {
        assert.strictEqual(mainFunctions.subtract(5, 2), 3);
    });

    it('should multiply numbers correctly', () => {
        assert.strictEqual(mainFunctions.multiply(2, 3), 6);
    });

    it('should divide numbers correctly', () => {
        assert.strictEqual(mainFunctions.divide(6, 2), 3);
    });

    it('should calculate power correctly', () => {
        assert.strictEqual(mainFunctions.power(2, 3), 8);
    });

    it('should calculate square root correctly', () => {
        assert.strictEqual(mainFunctions.squareRoot(9), 3);
    });

    it('should calculate factorial correctly', () => {
        assert.strictEqual(mainFunctions.factorial(5), 120);
        assert.strictEqual(mainFunctions.factorial(0), 1);
        assert.strictEqual(mainFunctions.factorial(1), 1);
    });

    it('should generate Fibonacci sequence correctly', () => {
        assert.deepStrictEqual(mainFunctions.fibonacci(5), [0, 1, 1, 2, 3]);
        assert.deepStrictEqual(mainFunctions.fibonacci(8), [0, 1, 1, 2, 3, 5, 8, 13]);
    });

    it('should determine prime numbers correctly', () => {
        assert.strictEqual(mainFunctions.isPrime(7), true);
        assert.strictEqual(mainFunctions.isPrime(4), false);
        assert.strictEqual(mainFunctions.isPrime(1), false);
    });

    it('should generate random numbers within range', () => {
        const min = 1;
        const max = 10;
        const randomNum = mainFunctions.randomNumber(min, max);
        assert.ok(randomNum >= min && randomNum <= max);
    });

    it('should calculate square correctly', () => {
        assert.strictEqual(mainFunctions.square(4), 16);
    });

    it('should calculate cube correctly', () => {
        assert.strictEqual(mainFunctions.cube(3), 27);
    });

    it('should calculate cube root correctly', () => {
        assert.strictEqual(mainFunctions.cubeRoot(27), 3);
    });

    it('should calculate logarithm correctly', () => {
        assert.strictEqual(mainFunctions.logarithm(Math.E), 1);
    });

    it('should calculate exponential correctly', () => {
        assert.strictEqual(mainFunctions.exponential(0), 1);
    });

    it('should calculate sine correctly', () => {
        assert.strictEqual(mainFunctions.sine(Math.PI / 2), 1);
    });

    it('should calculate cosine correctly', () => {
        assert.strictEqual(mainFunctions.cosine(0), 1);
    });

    it('should calculate tangent correctly', () => {
        assert.strictEqual(mainFunctions.tangent(0), 0);
    });

    it('should calculate arcsine correctly', () => {
        assert.strictEqual(mainFunctions.arcSine(1), Math.PI / 2);
    });

    it('should calculate arccosine correctly', () => {
        assert.strictEqual(mainFunctions.arcCosine(1), 0);
    });

    it('should calculate arctangent correctly', () => {
        assert.strictEqual(mainFunctions.arcTangent(0), 0);
    });

    it('should calculate hyperbolic sine correctly', () => {
        assert.strictEqual(mainFunctions.hyperbolicSine(0), 0);
    });

    it('should calculate hyperbolic cosine correctly', () => {
        assert.strictEqual(mainFunctions.hyperbolicCosine(0), 1);
    });

    it('should calculate hyperbolic tangent correctly', () => {
        assert.strictEqual(mainFunctions.hyperbolicTangent(0), 0);
    });

    it('should calculate inverse hyperbolic sine correctly', () => {
        assert.strictEqual(mainFunctions.arcHyperbolicSine(0), 0);
    });

    it('should calculate inverse hyperbolic cosine correctly', () => {
        assert.strictEqual(mainFunctions.arcHyperbolicCosine(1), 0);
    });

    it('should calculate inverse hyperbolic tangent correctly', () => {
        assert.strictEqual(mainFunctions.arcHyperbolicTangent(0), 0);
    });

    it('should round numbers correctly', () => {
        assert.strictEqual(mainFunctions.round(3.7), 4);
        assert.strictEqual(mainFunctions.round(3.2), 3);
    });

    it('should floor numbers correctly', () => {
        assert.strictEqual(mainFunctions.floor(3.7), 3);
        assert.strictEqual(mainFunctions.floor(3.2), 3);
    });

    it('should find maximum correctly', () => {
        assert.strictEqual(mainFunctions.max(3, 7), 7);
        assert.strictEqual(mainFunctions.max(3, 2), 3);
    });
});
