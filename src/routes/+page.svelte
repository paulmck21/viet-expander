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
</form>
