import { test } from "@playwright/test";

test("CheckBox & Radio Buttons", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.check("div.checkbox-group input[value='Option 1']"); // checking a checkbox

  await page.waitForTimeout(2000); //wait for 2 seconds to observe the changes

  await page.uncheck("div.checkbox-group input[value='Option 1']"); //unchecking

  await page.getByRole("radio", { name: "Choice A" }).check(); //selecting a radio button
});
