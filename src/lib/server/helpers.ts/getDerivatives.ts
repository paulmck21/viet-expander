String.prototype.replaceAt = function (this: string, index: number, replacement: string): string {
	return this?.substring(0, index) + replacement + this.substring(index + replacement.length);
};

const constructLetterDerivatives = (word: string, options: string[]): string[] => {
	const indexes: number[] = [];
	word.split('').forEach((letter, index) => {
		if (options.includes(letter)) {
			indexes.push(index);
		}
	});
	if (indexes.length === 0) {
		return [word];
	}
	const derivativesOfA: string[] = [];
	indexes.forEach((index) => {
		options.forEach((option) => derivativesOfA.push(word.replaceAt(index, option)));
	});
	return derivativesOfA;
};

const getAccountForA = (word: string): string[] => {
	const options = ['a', 'â', 'ă'];
	return constructLetterDerivatives(word, options);
};

const getAccountForE = (word: string): string[] => {
	const options = ['e', 'ê'];
	return constructLetterDerivatives(word, options);
};

const getAccountForO = (word: string): string[] => {
	const options = ['o', 'ô', 'ơ'];
	return constructLetterDerivatives(word, options);
};

const getAccountForU = (word: string): string[] => {
	const options = ['u', 'ư'];
	return constructLetterDerivatives(word, options);
};

const getAccountForD = (word: string): string[] => {
	const options = ['d', 'đ'];
	return constructLetterDerivatives(word, options);
};

export const getDerivatives = (word: string): string[] => {
	let arr: string[] = [word];
	let mapForA: string[] = [];
	let mapForE: string[] = [];
	let mapForO: string[] = [];
	let mapForU: string[] = [];
	let mapForD: string[] = [];

	arr.forEach((derivative) => (mapForA = [...mapForA, ...getAccountForA(derivative)]));
	arr = [...new Set([...arr, ...mapForA])];
	arr.forEach((derivative) => (mapForE = [...mapForE, ...getAccountForE(derivative)]));
	arr = [...new Set([...arr, ...mapForE])];
	arr.forEach((derivative) => (mapForO = [...mapForO, ...getAccountForO(derivative)]));
	arr = [...new Set([...arr, ...mapForO])];
	arr.forEach((derivative) => (mapForU = [...mapForU, ...getAccountForU(derivative)]));
	arr = [...new Set([...arr, ...mapForU])];
	arr.forEach((derivative) => (mapForD = [...mapForD, ...getAccountForD(derivative)]));
	arr = [...new Set([...arr, ...mapForD])];
	return arr;
};

export default getDerivatives;
