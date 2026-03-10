import { test } from "@playwright/test";

test("DragAndDrop", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  //scroll to Drag anddrop the section
  await page.locator("//h2[text()='Todo Drag & Drop']").scrollIntoViewIfNeeded;

  //get locators
  const finishReportToDo = page.locator("//li[text()='Finish report']");
  const doneZone = page.locator("#doneList");

  //Drag and Drop using dragTo

  await finishReportToDo.dragTo(doneZone);
  await page.waitForTimeout(3000);

  //Drag and Drop using dragAndDrop
  await page.dragAndDrop("//li[text()='Buy groceries']", "#doneList");
});
