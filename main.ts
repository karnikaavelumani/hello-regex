import { abgPattern } from "./fundamentals.ts";

const abgString = prompt("Enter a string to test against the ABG pattern:");
if (abgPattern.test(abgString ?? "")) {
  console.log("You're banned!");
} else {
  console.log("I'll let it slide...");
}
