declare module '@vntk/dictionary' {
	interface Dictionary {
		lookup(word: string): string[];
		define(word: string): string[];
		suggest(word: string): string[];
		segment(text: string): string[];
		has(word: string): boolean;
	}

	const dictionary: Dictionary;
	export default dictionary;
}
