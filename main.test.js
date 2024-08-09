
import { test, expect } from "vitest";
import { solveRiddle } from "./main.js";

test("should return true for the correct answer", () => {
  const expected = true;
  const actual = solveRiddle("");
  expect(actual).toBe(expected);
});


// test("should return true for the correct answer", () => {
//     const expected = true;
//     const actual = solveRiddle(" ");
//     expect(actual).toBe(expected);
//   });

// test("should return false for an incorrect answer", () => {
//     const expected = false;
//     const actual = solveRiddle("tree");
//     expect(actual).toBe(expected);
//   });