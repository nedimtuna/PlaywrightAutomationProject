# PlaywrightAutomationProject
# E2E Testing with Playwright

This directory contains end-to-end (E2E) tests for our application using Playwright.

## Prerequisites

- Make sure you have all necessary dependencies installed: `pnpm install`.


## Running E2E Tests

To run the end-to-end tests:

1. **Execute Playwright Tests:**
   - Run `pnpm e2e` to start the test suite.
   - Playwright will automatically handle starting and stopping the development server.

2. **Interactive Mode:**
   - For a more interactive experience, run `pnpm e2e:ui`.


## Test Configuration

- Tests are located in `.tests.
- Configured for multiple environments including Chromium, Firefox, WebKit, and mobile browsers.

Certainly! Here's an expanded section on writing tests:

---

## Writing Tests

When writing Playwright E2E tests:

1. **Test Structure:**
   - Organize your tests within the `.tests` directory.
   - Name test files following the pattern `*.spec.ts` or `*.test.ts`.

2. **Importing `test` and `expect`**
    Make sure to import the above from the file `./setup` and not from Playwright.
    This file contains a fixture to close the browser gracefully and avoid issues.
    `import { test, expect } from './setup'`

2. **Test Cases:**
   - Each test case should represent a user interaction scenario with our application.
   - Use descriptive names for test cases to clearly convey their purpose.

3. **Page Objects:**
   - Consider using the Page Object Model for structuring tests, which simplifies maintenance and improves readability.

4. **Assertions:**
   - Write clear assertions to check the expected outcomes of actions.
   - Ensure assertions are user-centric, focusing on visible and interactive elements.

5. **Best Practices:**
   - Keep tests independent and avoid dependencies between tests.
   - Use data-test attributes or accessible roles for more stable selectors.
   - Regularly review and update tests to reflect changes in the application.

6. **Documentation:**
   - Document any specific patterns or practices used in your tests to maintain consistency across the team.

