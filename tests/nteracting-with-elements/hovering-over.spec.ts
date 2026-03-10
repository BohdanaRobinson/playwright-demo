import { test } from "@playwright/test";

test("Hover Action", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  //scroll to hover section
  await page.locator("//h2[text()= 'Hover Menu']").scrollIntoViewIfNeeded();

  //hover over the element
  await page.hover("div.menu");

  //wait for 2 sec to obsserve changes
  await page.waitForTimeout(2000);

  //click on the revelead submenu item
  await page.click("#submenuItem");

  //move mouse away to hide submenu
  await page.mouse.move(0, 0);
});
