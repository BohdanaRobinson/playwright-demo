import { test } from "@playwright/test";

// test("WaitForElements", async ({ page }) => {
//   await page.goto("https://selectors-practice.onrender.com/");

//   //1.wait until element appears
//   //exmple : waiting foe the welcome message to appear before interacting
//   await page.waitForSelector("#welcomMessage", { state: "visible" });

//   const welcomeText = await page.textContent("#welcomeMessage");
//   console.log("Welcome message", welcomeText);

//   //2. Wait for a specific network state
//   //example: wait until network is idle after a button click triggres an API call
//   await page.click("#loadDataButton"); //assume this triggers network requests
//   const dataText = await page.textContent("#data");
//   console.log("Loaded data", dataText);
// });
