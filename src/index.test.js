import {
	capitalize,
	reverseString,
	Calculator,
	caesarCipher,
} from "./index.js";

// catpitalize take a string and capitalize it's first character.
it("Capitalize first letter", () =>
	expect(capitalize("vatsal")).toMatch("Vatsal"));

it("Capitalize first letter", () =>
	expect(capitalize("easter")).toMatch("Easter"));

it("Reverse String", () => expect(reverseString("vatsal")).toMatch("lastav"));

it("Reverse String", () => expect(reverseString("easter")).toMatch("retsae"));

const calc = Calculator();
it("Calculator Add", () => expect(calc.add(5, 4)).toBe(9));
it("Calculator Add", () => expect(calc.add(9, 4)).toBe(13));

it("Calculator Sub", () => expect(calc.sub(5, 4)).toBe(1));
it("Calculator Sub", () => expect(calc.sub(9, 4)).toBe(5));

it("Calculator Multiply", () => expect(calc.mul(5, 4)).toBe(20));
it("Calculator Multiply", () => expect(calc.mul(9, 4)).toBe(36));

it("Calculator Division", () => expect(calc.div(5, 4)).toBeCloseTo(1.25));
it("Calculator Division", () => expect(calc.div(9, 4)).toBeCloseTo(2.25));

it("Caesar's Cipher Repeat", () =>
	expect(caesarCipher("xyz", 3)).toMatch(/^abc$/));
it("Caesar's Cipher Preserve Case", () =>
	expect(caesarCipher("tooDDler", 5)).toMatch(/^yttIIqjw$/));
it("Caesar's Cipher Preserve Puntuations", () =>
	expect(caesarCipher("Hello, World!", 3)).toMatch(/^Khoor, Zruog!$/));
it("Caesar's Cipher Large shift factors", () =>
	expect(caesarCipher("Hello, world!!", 50)).toMatch(/^Fcjjm, umpjb!!$/));
