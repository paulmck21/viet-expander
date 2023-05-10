<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.word.original}</h1>
{#if data.word.error}
	<p>{data.word.error}</p>
{/if}
<p>Words that actually exist:</p>
<ul>
	{#each data.word.definitions as definition}
		<li>
			{definition[0]}: {definition[1]}
		</li>
	{/each}
</ul>
<p>All possible letter combinations:</p>
<ul>
	{#each data.word.derivatives as derivative}
		<li>{derivative}</li>
	{/each}
</ul>

<style>
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
		text-align: center;
		color: var(--blue-dark);
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 1rem;
		text-align: center;
		color: var(--blue-medium);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	li {
		margin: 0.5rem;
		padding: 0.5rem;
		border-radius: 0.25rem;
		background-color: var(--white);
		color: var(--blue-medium);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
		font-size: 1rem;
		min-width: 80px;
	}

	/* WCAG AA accessibility compliant styles */
	/* Text color contrast ratio of at least 4.5:1 with background */
	h1,
	p,
	li {
		color: var(--blue-dark);
	}

	/* Background color contrast ratio of at least 3:1 with adjacent colors */
	.header {
		background-color: var(--blue-medium);
		color: var(--white);
	}

	li {
		background-color: var(--white);
		color: var(--blue-medium);
	}

	/* Increase color contrast ratio of text on hover */
	.header a:hover {
		color: var(--coral);
	}

	/* Increase color contrast ratio of active/focused elements */
	input:focus,
	button:focus {
		outline: none;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
</style>
