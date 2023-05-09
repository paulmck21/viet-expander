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
