import "./css/styles.css";
export function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
	return str.split("").reverse().join("");
}

export function Calculator() {
	return {
		add: (x, y) => x + y,
		sub: (x, y) => x - y,
		mul: (x, y) => x * y,
		div: (x, y) => x / y,
	};
}

function cipherLowerCase(char, shift) {
	let cipher = char.charCodeAt() + shift;
	while (cipher > 122) cipher = cipher - 123 + 97;
	return String.fromCharCode(cipher);
}

function cipherUpperCase(char, shift) {
	let cipher = char.charCodeAt() + shift;
	while (cipher > 90) cipher = cipher - 91 + 65;
	return String.fromCharCode(cipher);
}

export function caesarCipher(str, shiftFactor) {
	return str
		.split("")
		.map((char) => {
			const asciiCode = char.charCodeAt();
			if (asciiCode > 96 && asciiCode < 123)
				return cipherLowerCase(char, shiftFactor);
			if (asciiCode > 64 && asciiCode < 91)
				return cipherUpperCase(char, shiftFactor);
			return char;
		})
		.join("");
}

export function analyzeArray(arr) {
	return arr.reduce(
		(obj, value, index) => {
			if (index + 1 < arr.length) obj.average += value;
			else {
				const average = (obj.average + value) / arr.length;
				obj.average = Number(average.toFixed(1));
			}
			obj.min = value < obj.min ? value : obj.min;
			obj.max = value > obj.max ? value : obj.max;
			return obj;
		},
		{
			average: 0,
			min: arr[0],
			max: arr[0],
			length: arr.length,
		},
	);
}
