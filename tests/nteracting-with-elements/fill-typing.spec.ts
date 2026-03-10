import { test } from "@playwright/test";

test("Filling&Typing", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.fill("#username", "Dana"); //filling input fields;

  (await page.locator("#email").pressSequentially("bogdana.goyuk@gmail.com"),
    { delay: 4000 });
});
