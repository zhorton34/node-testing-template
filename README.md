# Node.js Testing Template

A comprehensive testing template for Node.js applications, utilizing the built-in Node.js test runner and a variety of testing techniques.

## Table of Contents

- [Available Scripts](#available-scripts)
- [Test Files Overview](#test-files-overview)
- [Test Cases Overview](#test-cases-overview)
- [Running the Tests](#running-the-tests)
- [License](#license)

## Available Scripts

Use `npm run <script-name>` to execute the following scripts:

| Script Name         | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| `start`             | Runs the main application file (`main.js`).                                 |
| `dev`               | Runs the application in watch mode, restarting on file changes.            |
| `test`              | Executes the test suite with experimental features like coverage and snapshots. |
| `test:watch`        | Runs tests in watch mode, re-running on file changes.                      |
| `test:coverage`     | Runs tests with coverage reporting.                                        |
| `test:all`          | Executes all tests with experimental features enabled.                      |
| `test:all:update`   | Runs all tests and updates snapshots.                                      |

## Test Files Overview

Located in the `test/` directory, these files demonstrate various testing scenarios and techniques:

| Test File                     | Description                                             |
| ----------------------------- | ------------------------------------------------------- |
| `alias.test.js`               | Using aliases in tests.                                 |
| `async.test.js`               | Testing asynchronous functions.                         |
| `concurrent.test.js`          | Running tests concurrently.                             |
| `custom-reporter.js`          | Implementing a custom test reporter.                    |
| `error.test.js`               | Error handling and testing.                             |
| `external-dependency.test.js` | Mocking external dependencies.                         |
| `hooks.test.js`               | Utilizing setup and teardown hooks.                     |
| `main.test.js`                | Testing main application logic.                         |
| `mock.test.js`                | Various mocking techniques.                             |
| `only-skip.test.js`           | Focusing on specific tests or skipping others.          |
| `parameterized.test.js`       | Parameterized testing for multiple scenarios.           |
| `performance.test.js`         | Basic performance testing.                              |
| `promise.test.js`             | Testing promise-based code.                             |
| `setup-teardown.test.js`      | Setup and teardown for test suites.                     |
| `snapshot.test.js`            | Snapshot testing for data structure changes.            |
| `stream.test.js`              | Testing Node.js streams for data flow.                  |

These files serve as references for implementing diverse testing strategies in your Node.js projects.

## Test Cases Overview

### 1. Math Operations (`test/main.test.js`)

Ensures various mathematical functions work correctly:

- Basic operations: addition, subtraction, multiplication, division
- Advanced functions: power, square root, factorial, Fibonacci sequence
- Prime number checking, random number generation
- Trigonometric and hyperbolic functions
- Rounding and floor operations

### 2. Asynchronous Functions (`test/async.test.js`)

Validates asynchronous operations:

- `asynchronouslyGetData`: Successfully returns data
- `asynchronouslyFailToGetData`: Throws an error as expected

### 3. Concurrent Tests (`test/concurrent.test.js`)

Demonstrates running tests concurrently to speed up I/O-bound test suites:

- Two tests running with a 1-second delay each

### 4. Custom Reporter (`test/custom-reporter.js`)

Implements and uses a custom test reporter:

- Logs the completion of each test

### 5. Error Handling (`test/error.test.js`)

Tests error throwing and handling mechanisms:

- Verifies specific errors are thrown under certain conditions

### 6. External Dependency Mocking (`test/external-dependency.test.js`)

Mocks external dependencies for isolated testing:

- Mocks an external function and tests its behavior

### 7. Hooks (`test/hooks.test.js`)

Uses setup and teardown hooks:

- Utilizes `before` and `after` hooks to prepare and clean the test environment

### 8. Mocking (`test/mock.test.js`)

Explores various mocking techniques:

- Mocking simple functions and module dependencies
- Spying on method calls
- Mocking and restoring timers and console methods

### 9. Only and Skip (`test/only-skip.test.js`)

Focuses on specific tests or skips others:

- Always runs one test
- Skips another test

### 10. Parameterized Tests (`test/parameterized.test.js`)

Writes efficient tests for similar scenarios:

- Tests addition with multiple input sets

### 11. Performance Testing (`test/performance.test.js`)

Measures execution time of functions:

- Executes and times function performance

### 12. Promise Testing (`test/promise.test.js`)

Tests promise-based asynchronous code:

- Validates both resolved and rejected promises

### 13. Setup and Teardown (`test/setup-teardown.test.js`)

Manages test environment setup and cleanup:

- Sets up before tests and cleans up afterward

### 14. Snapshot Testing (`test/snapshot.test.js`)

Detects unexpected changes in data structures:

- Compares complex objects to stored snapshots
- Handles cases with no or incorrect snapshots

### 15. Stream Testing (`test/stream.test.js`)

Ensures correct data flow in Node.js streams:

- Tests reading from a `Readable` stream and writing to a `Writable` stream

## Running the Tests

To execute all tests, run:

```bash
npm test
```

For additional options, use the available scripts listed above.

## License

[MIT](LICENSE)
