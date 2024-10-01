/**
 * Add two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const add = (a, b) => {
  return a + b;
};

/**
* Subtract two numbers
* @param {number} a 
* @param {number} b     
* @returns {number}
*/
export const subtract = (a, b) => {
  return a - b;
}

/**
* Multiply two numbers
* @param {number} a 
* @param {number} b 
* @returns {number}
*/
export const multiply = (a, b) => {
  return a * b;
}

/**
* Divide two numbers
* @param {number} a 
* @param {number} b 
* @returns {number}
*/
export const divide = (a, b) => {
  return a / b;
}

/**
* Square a number
* @param {number} a 
* @returns {number}
*/
export const square = (a) => {
  return a * a;
}

/**
* Cube a number
* @param {number} a 
* @returns {number}
*/
export const cube = (a) => {
  return a * a * a;
}

/**
* Power a number
* @param {number} a 
* @param {number} b 
* @returns {number}
*/
export const power = (a, b) => {
  return a ** b;
}

/**
* Square root a number
* @param {number} a 
* @returns {number}
*/
export const squareRoot = (a) => {
  return Math.sqrt(a);
}

/**
* Cube root a number
* @param {number} a 
* @returns {number}
*/
export const cubeRoot = (a) => {
  return Math.cbrt(a);
}

/**
* Logarithm a number
* @param {number} a 
* @returns {number}
*/
export const logarithm = (a) => {
  return Math.log(a);
}

/**
* Exponential a number
* @param {number} a 
* @returns {number}
*/
export const exponential = (a) => {
  return Math.exp(a);
}

/**
* Sine a number
* @param {number} a 
* @returns {number}
*/
export const sine = (a) => {
  return Math.sin(a);
}

/**
* Cosine a number
* @param {number} a 
* @returns {number}
*/
export const cosine = (a) => {
  return Math.cos(a);
}

/**
* Tangent a number
* @param {number} a 
* @returns {number}
*/
export const tangent = (a) => {
  return Math.tan(a);
}

/**
* Arc sine a number
* @param {number} a 
* @returns {number}
*/
export const arcSine = (a) => {
  return Math.asin(a);
}

/**
* Arc cosine a number
* @param {number} a 
* @returns {number}
*/
export const arcCosine = (a) => {
  return Math.acos(a);
}

/**
* Arc tangent a number
* @param {number} a 
* @returns {number}
*/
export const arcTangent = (a) => {
  return Math.atan(a);
}

/**
* Hyperbolic sine a number
* @param {number} a 
* @returns {number}
*/
export const hyperbolicSine = (a) => {
  return Math.sinh(a);
}

/**
* Hyperbolic cosine a number
* @param {number} a 
* @returns {number}
*/
export const hyperbolicCosine = (a) => {
  return Math.cosh(a);
}

/**
* Hyperbolic tangent a number
* @param {number} a 
* @returns {number}
*/
export const hyperbolicTangent = (a) => {
  return Math.tanh(a);
}

/**
* Arc hyperbolic sine a number
* @param {number} a 
* @returns {number}
*/
export const arcHyperbolicSine = (a) => {
  return Math.asinh(a);
}

/**
* Arc hyperbolic cosine a number
* @param {number} a 
* @returns {number}
*/
export const arcHyperbolicCosine = (a) => {
  return Math.acosh(a);
}

/**
* Arc hyperbolic tangent a number
* @param {number} a 
* @returns {number}
*/
export const arcHyperbolicTangent = (a) => {
  return Math.atanh(a);
}

/**
* Factorial a number
* @param {number} a 
* @returns {number}
*/
export const factorial = (a) => {
  if (a === 0 || a === 1) return 1;
  return a * factorial(a - 1);
}


/**
* Generate Fibonacci sequence
* @param {number} n
* @returns {number[]}
*/
export const fibonacci = (n) => {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence.slice(0, n);
}

/**
* Check if a number is prime
* @param {number} n
* @returns {boolean}
*/
export const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
* Generate a random number within a range
* @param {number} min
* @param {number} max
* @returns {number}
*/
export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
* Round a number
* @param {number} a 
* @returns {number}
*/
export const round = (a) => {
  return Math.round(a);
}

/**
* Floor a number
* @param {number} a 
* @returns {number}
*/
export const floor = (a) => {
  return Math.floor(a);
}

/**
* Max a number
* @param {number} a 
* @returns {number}
*/
export const max = (a, b) => {
  return Math.max(a, b);
}

/**
* Asynchronously get data
* @returns {Promise<string>}
*/
export const asyncronouslyGetData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 1000);
  });
}

/**
* Asynchronously fail to get data
* @returns {Promise<string>}
* @throws {Error}
*/
export const asyncronouslyFailToGetData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('error'));
    }, 1000);
  });
}
