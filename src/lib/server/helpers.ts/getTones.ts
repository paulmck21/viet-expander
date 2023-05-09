const vowels: string[][] = [
	'aăâeêioôơuưy'.split(''),
	'áắấéếíóốớúứý'.split(''),
	'àằầèềìòồờùừỳ'.split(''),
	'ảẳẩẻểỉỏổởủửỷ'.split(''),
	'ãẵẫẽễĩõỗỡũữỹ'.split(''),
	'ạặậẹệịọộợụựỵ'.split('')
];

const applyTones = (word: string): string[] => {
	const indexOfSecondLastLetter = word.length - 2;
	const secondLastLetter: string = word.split('')[indexOfSecondLastLetter];
	const secondLastLetterIsVowel: boolean = vowels[0].indexOf(secondLastLetter) >= 0;

	const lastVowelMap: number[] = vowels[0].map((vowel) => word.lastIndexOf(vowel));
	const lastVowelIndexInWord = Math.max(...lastVowelMap) || -1;
	if (lastVowelIndexInWord < 0) {
		return [word];
	}

	const lastVowel = word.split('')[lastVowelIndexInWord];
	const lastVowelIndexInVowelArray = vowels[0].indexOf(
		secondLastLetterIsVowel ? secondLastLetter : lastVowel
	);
	const arr = [word];
	const indexOfLetterToReplace = secondLastLetterIsVowel
		? indexOfSecondLastLetter
		: lastVowelIndexInWord;
	for (let index = 1; index < vowels.length; index += 1) {
		arr.push(word.replaceAt(indexOfLetterToReplace, vowels[index][lastVowelIndexInVowelArray]));
	}
	return arr;
};

export const getTones = (words: string[]): string[] => {
	let arr: string[] = [];
	words.forEach((word) => {
		arr = [...new Set([...arr, ...applyTones(word)])];
	});
	return arr;
};
