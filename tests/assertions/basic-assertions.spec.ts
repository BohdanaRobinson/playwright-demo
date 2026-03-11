import { test, expect } from "@playwright/test";

test("truthy and falsy value", async () => {
  const a = true;
  const b = null;

  expect(a).toBeTruthy(); //passes
  expect(b).toBeFalsy(); //passes
});

test("Equality checks", async () => {
  const num = 10;
  const str = "Hello";

  expect(num).toBe(10); //exact value
  expect(str).toEqual("Hello"); //deep equality;
});

test("comparison checks", async () => {
  const score = 85;

  expect(score).toBeGreaterThan(80); //passses
  expect(score).toBeGreaterThanOrEqual(85); //passes
  expect(score).toBeLessThan(100); //passses
});
