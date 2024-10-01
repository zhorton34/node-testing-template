# Node.js Testing Template

This project demonstrates comprehensive testing practices for Node.js
applications using the built-in Node.js test runner and various testing
techniques.

## Available Scripts

The following scripts are available to run via `npm run <script-name>`:

| Script Name       | Description                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| `start`           | Runs the main application file (`main.js`).                                                    |
| `dev`             | Runs the main application file in watch mode, automatically restarting on file changes.        |
| `test`            | Runs the test suite with experimental features enabled, including test coverage and snapshots. |
| `test:watch`      | Runs the test suite in watch mode, re-running tests on file changes.                           |
| `test:coverage`   | Runs the test suite with coverage reporting.                                                   |
| `test:all`        | Runs all tests with experimental features enabled.                                             |
| `test:all:update` | Runs all tests and updates snapshots.                                                          |

## Test Files Overview

The `test/` directory contains various test files, each demonstrating different
testing scenarios and techniques:

| Test File                     | Description                                                 |
| ----------------------------- | ----------------------------------------------------------- |
| `alias.test.js`               | Demonstrates how to use aliases in tests.                   |
| `async.test.js`               | Shows testing of asynchronous functions.                    |
| `concurrent.test.js`          | Illustrates running tests concurrently.                     |
| `custom-reporter.js`          | Provides an example of a custom test reporter.              |
| `error.test.js`               | Demonstrates error handling and testing.                    |
| `external-dependency.test.js` | Shows how to mock external dependencies.                    |
| `hooks.test.js`               | Illustrates the use of setup and teardown hooks.            |
| `main.test.js`                | Contains tests for the main application logic.              |
| `mock.test.js`                | Demonstrates various mocking techniques.                    |
| `only-skip.test.js`           | Shows how to run only specific tests or skip certain tests. |
| `parameterized.test.js`       | Demonstrates parameterized testing.                         |
| `performance.test.js`         | Includes performance testing examples.                      |
| `promise.test.js`             | Shows testing of promise-based code.                        |
| `setup-teardown.test.js`      | Demonstrates setup and teardown for test suites.            |
| `snapshot.test.js`            | Illustrates snapshot testing.                               |
| `stream.test.js`              | Provides examples of testing Node.js streams.               |

These test files cover a wide range of testing scenarios and can serve as a
reference for implementing various testing strategies in your Node.js projects.

## Test Cases Overview

### 1. Math Operations (`test/main.test.js`)

These tests cover various mathematical operations implemented in the main
application file. They ensure that basic and advanced mathematical functions
work correctly.

- Addition, subtraction, multiplication, division
- Power, square root, factorial
- Fibonacci sequence generation
- Prime number checking
- Random number generation
- Trigonometric functions (sine, cosine, tangent, etc.)
- Hyperbolic functions
- Rounding and floor operations

### 2. Asynchronous Functions (`test/async.test.js`)

Tests asynchronous operations to ensure they resolve or reject as expected.

- `asyncronouslyGetData`: Should return data successfully
- `asyncronouslyFailToGetData`: Should throw an error

### 3. Concurrent Tests (`test/concurrent.test.js`)

Demonstrates the ability to run tests concurrently, which can significantly
speed up the test suite for I/O-bound tests.

- Two tests running concurrently with a 1-second delay each

### 4. Custom Reporter (`test/custom-reporter.js`)

Shows how to implement and use a custom test reporter.

- Custom reporter that logs the completion of each test

### 5. Error Handling (`test/error.test.js`)

Tests error throwing and handling mechanisms.

- Checks if specific errors are thrown under certain conditions

### 6. External Dependency Mocking (`test/external-dependency.test.js`)

Demonstrates how to mock external dependencies for isolated testing.

- Mocks an external function and tests the behavior

### 7. Hooks (`test/hooks.test.js`)

Illustrates the use of setup and teardown hooks in tests.

- Uses `before` and `after` hooks to set up and clean up test environment

### 8. Mocking (`test/mock.test.js`)

Covers various mocking techniques for unit testing.

- Mocking simple functions
- Spying on method calls
- Mocking module dependencies
- Mocking and restoring timers
- Mocking console methods

### 9. Only and Skip (`test/only-skip.test.js`)

Shows how to focus on specific tests or skip certain tests.

- One test that always runs
- One test that is skipped

### 10. Parameterized Tests (`test/parameterized.test.js`)

Demonstrates how to write parameterized tests for more efficient testing of
similar scenarios.

- Tests addition function with multiple sets of inputs

### 11. Performance Testing (`test/performance.test.js`)

Includes a basic performance test to measure execution time.

- Measures the time taken to execute a function

### 12. Promise Testing (`test/promise.test.js`)

Tests promise-based asynchronous code.

- Tests resolving and rejecting promises

### 13. Setup and Teardown (`test/setup-teardown.test.js`)

Shows how to use setup and teardown functions for test suites.

- Sets up a test environment before tests and cleans up after

### 14. Snapshot Testing (`test/snapshot.test.js`)

Demonstrates snapshot testing for detecting unexpected changes in data
structures.

- Tests if a complex object matches a stored snapshot
- Tests behavior when no snapshot exists
- Tests behavior with an incorrect snapshot

### 15. Stream Testing (`test/stream.test.js`)

Tests Node.js streams to ensure correct data flow.

- Tests reading from a Readable stream and writing to a Writable stream

## Running the Tests

To run all tests:
