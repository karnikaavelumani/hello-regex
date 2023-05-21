// 1. Create a regular expression pattern instance.
export const abgPattern = /a+[\D\W]*b+[\D\W]*g+/gim;

// 2. Test the pattern against the input string.
const abgString = "kinda like how ab g is a banned word";
let isAbg = abgPattern.test(abgString);
console.log(isAbg);
const notAbgString = "I'll listen to the mods:)";
isAbg = abgPattern.test(notAbgString);
console.log(isAbg);
