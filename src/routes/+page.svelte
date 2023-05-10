<script lang="ts">
	let word = '';
</script>

<h1>Welcome to Viet Expander</h1>
<p>
	Where you see how many words you can make in Vietnamese script out of a single word in Latin
	script
</p>
<form action="/words/{word}">
	<label for="wordInput">Choose a word</label>
	<input type="text" id="wordInput" placeholder="eg: banh" bind:value={word} />
	<button type="submit">Submit</button>
</form>

<style>
	:root {
		--blue-light: #b5d9ff;
		--blue-medium: #5fa5e2;
		--blue-dark: #0065a4;
		--white: #ffffff;
		--coral: #ff5e5b;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
		text-align: center;
		color: var(--blue-dark);
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		text-align: center;
		color: var(--blue-medium);
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	label {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		color: var(--blue-medium);
	}

	input {
		padding: 0.5rem;
		font-size: 1rem;
		border: none;
		border-radius: 0.25rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 300px;
		margin-bottom: 1rem;
		box-sizing: border-box;
		background-color: var(--white);
		color: var(--blue-medium);
	}

	input:focus {
		outline: none;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	button {
		background-color: var(--coral);
		color: var(--white);
		border: none;
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;
	}

	button:hover {
		background-color: #ff7b79;
	}
</style>
