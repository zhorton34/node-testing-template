# Node.js Testing Template with Native Test Runner

This project demonstrates a comprehensive testing setup using Node.js's built-in
test runner with experimental features. It showcases various testing techniques
including unit tests, mocking, and coverage reporting.

## Features

- ES6 module syntax
- Built-in Node.js test runner
- Setup and teardown hooks
- Test hooks: `before`, `after`, `beforeEach`, `afterEach`
- Mocking examples
- Snapshot testing
- Assertions using `assert` module
- Sync and async tests
- Test skipping, TODOs, and `only` tests
- Subtests and test plans
- Describe and it aliases
- Code coverage support

## Running Tests

To run tests:

```bash
npm test
```

To run tests with coverage:

```bash
npm run coverage
```

## Project Structure

```
my-node-project/
├── package.json
├── src/
│   └── myModule.js
├── test/
│   ├── myModule.test.js
│   ├── alias.test.js
│   ├── mock.test.js
│   └── snapshot.test.js
└── README.md
```

## Notes

- Ensure you are using Node.js version that supports the built-in test runner
  (v18.0.0 or newer).
- Some features like snapshot testing and mocking may be experimental in your
  Node.js version.
- The `assert` module is built into Node.js and is used for assertions.
