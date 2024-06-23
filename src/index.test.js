import {
	capitalize,
	reverseString,
	Calculator,
	caesarCipher,
	analyzeArray,
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

it("Analyze Array Min", () =>
	expect(analyzeArray([1, 34, 423, 0, 8]).min).toBe(0));
it("Analyze Array Min", () => expect(analyzeArray([34, 423, 8]).min).toBe(8));

it("Analyze Array Max", () =>
	expect(analyzeArray([43, 224, 1, 43, 9934, 9]).max).toBe(9934));
it("Analyze Array Max", () => expect(analyzeArray([1, 43, 9]).max).toBe(43));

it("Analyze Array Length", () =>
	expect(analyzeArray([2, 3, 1]).length).toBe(3));
it("Analyze Array Length", () =>
	expect(analyzeArray([42, 14, 32, 1, 2, 3, 1]).length).toBe(7));

it("Analyze Array Average", () =>
	expect(analyzeArray([1, 2, 3]).average).toBeCloseTo(2.0));
it("Analyze Array Average", () =>
	expect(analyzeArray([12, 15, 17]).average).toBeCloseTo(14.7));
it("Analyze Array Complete", () =>
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	}));
