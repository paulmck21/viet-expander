import dictionary from '@vntk/dictionary';

import translate from 'translate';

const actuallyTranslate = async (word: string): Promise<string[]> => {
	const englishTranslation = await translate(word, { from: 'vi' });
	return [word, englishTranslation];
};

export const getDefinitions = async (words: string[]): Promise<string[[]]> => {
	const filteredWords = words.filter((word) => dictionary.has(word));
	const definitionPromises: Promise<string[]>[] = [];
	const definitions: string[][] = [];
	filteredWords.map((word) => definitionPromises.push(actuallyTranslate(word)));
	await Promise.all(definitionPromises).then((values) => {
		definitions.push(...values);
	});

	return definitions;
};
