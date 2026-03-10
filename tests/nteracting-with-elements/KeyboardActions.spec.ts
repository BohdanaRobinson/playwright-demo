import { test } from "@playwright/test";

test("Keyboard Actions", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  //focus on input field
  await page.click("#keyboardInput");

  //type text using keyword
  const text = "Hello world";
  (await page.keyboard.type(text), { delay: 200 });
  await page.waitForTimeout(2000);

  //Press Enter key
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  //Press Backspace key

  for (let i = 0; i < text.length; i++) {
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(1000);
  }
});
