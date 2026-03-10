import { test } from "@playwright/test";

test("clicking", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.click("//button[text()='Login']"); ///single click

  await page.dblclick("//span[@alt='toggle-switch']");
});
