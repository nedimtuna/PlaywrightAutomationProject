# PlaywrightAutomationProject
# E2E Testing with Playwright

This project demonstrates an automated testing framework using Playwright with the Page Object Model (POM) design pattern in TypeScript. 

##Project Structure
-helpers # Utility functions and helpers
-pages # Page Object Models (POMs) for different web pages
-test-data # Test data files
-tests # Test scripts
-.gitignore # Git ignore file
-README.md # Project documentation
-package-lock.json # Auto-generated lock file for npm
-package.json # Project metadata and dependencies
-playwright.config.ts# Playwright configuration file

## Prerequisites
- Node.js
- npm
  
## Running E2E Tests

1. To execute tests use npx playwright test

2. To execute specific test use npx playwright test tests/your-test-file.spec.ts

## Test Configuration

- Tests are located in ./tests.
- Configured for multiple environments including Chromium, Firefox, WebKit, and mobile browsers.

## Writing Tests

When writing Playwright E2E tests:

1. **Test Structure:**
   - Organize your tests within the `./tests` directory.
   - Name test files following the pattern `*.spec.ts` or `*.test.ts`.

2. **Importing `test` and `expect`**
    Make sure to import the above from the  Playwright.
    This file contains a fixture to close the browser gracefully and avoid issues.
    `import { test, expect } from './@playwright'`

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
   - Keep assertions in the test scripts, never in the pages file.
   - Choose naming convention and follow it through the entire project
     

6. **Documentation:**
   - Document any specific patterns or practices used in your tests to maintain consistency across the team.

