import { test, expect } from "@playwright/test";

test("login button is clickable", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Locate using ID
  const loginButton = page.locator("form[id='loginForm'] button");
  await loginButton.click();

  // Assertion example
  await expect(page).toHaveURL(/practice/);
});
