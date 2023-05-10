<div>
	<div class="container">
		<header class="header">
			<a href="/">Home</a>
		</header>

		<main class="main">
			<!-- This is where the content will go -->
			<slot />
		</main>
	</div>
</div>

<!-- 
<style>
	:root {
		--blue-light: #b5d9ff;
		--blue-medium: #5fa5e2;
		--blue-dark: #0065a4;
	}

	:root {
		--white: #ffffff;
		--coral: #ff5e5b;
	}

	:global(body) {
		background-color: white;
		color: var(--blue-dark);
	}

	:root {
		--action-background: var(--coral);
		--action-text: var(--white);
	}

	h1 {
		color: var(--blue-dark);
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	.header {
		background-color: var(--blue-light);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}

	.header a {
		color: var(--action-text);
	}

	.main {
		padding: 1rem;
	}
</style> -->

<style>
	:root {
		--blue-light: #b5d9ff;
		--blue-medium: #5fa5e2;
		--blue-dark: #0065a4;
	}

	:root {
		--white: #ffffff;
		--coral: #ff5e5b;
	}

	:global(body) {
		background-color: white;
		color: var(--blue-dark);
	}

	:root {
		--action-background: var(--coral);
		--action-text: var(--white);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--blue-medium);
		color: var(--white);
		padding: 1rem;
	}

	.header a {
		text-decoration: none;
		color: var(--white);
		font-size: 1.2rem;
		font-weight: bold;
	}

	.header a:hover {
		color: var(--coral);
	}

	.main {
		padding: 1rem;
		background-color: var(--white);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin-top: 1rem;
	}
</style>
