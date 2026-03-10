import { test } from "@playwright/test";

test("Dropdowns", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  //scroll to Dropdown section
  await page.locator("#dropdownMenu").scrollIntoViewIfNeeded();

  await page.waitForTimeout(2000);

  //select blue from Dropdown
  await page.selectOption("#dropdownMenu", "Blue");

  //wait for 2 seconds to observe changes
  await page.waitForTimeout(2000);

  //select Red
  await page.selectOption("#dropdownMenu", "Red");
});
