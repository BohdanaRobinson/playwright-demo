// let greetings: string = " hello muhammad ";
// let task = greetings.toUpperCase().trim();

// console.log(task);

import { test } from "@playwright/test";

test("getByRoll()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  // Fill the username field by its ID
  await page.locator("#username").fill("Dana");
  // Explanation: This locates the input with ID 'username' and fills it with 'Dana'.

  // Fill the password field by its ID
  await page.locator("#password").fill("1223");
  // Explanation: This locates the input with ID 'password' and fills it with '1223'.

  // Click the login button by its role and name
  await page.getByRole("button", { name: "Login" }).click();
  // Explanation: This finds a button with the accessible name 'Login' and clicks it, simulating a user action.
});
