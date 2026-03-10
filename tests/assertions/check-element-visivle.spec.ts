import { test, expect } from "@playwright/test";

test("Check if element is visible", async ({ page }) => {
  //navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  //grab theh selector for the "text section" header
  const selector = "//h2[text()='Text Section']";
  await page.locator(selector).scrollIntoViewIfNeeded();

  //assert that the "Text SEction" is visible
  const isTextSectionHeaderVisible = await page.locator(selector).isVisible();
  expect(isTextSectionHeaderVisible).toBe(true);
  //or//
  expect(isTextSectionHeaderVisible).toBeTruthy();
});
