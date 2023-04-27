<script>
	import '$lib/styles/index.css'

	import '@fontsource/fira-sans'
	import '@fontsource/fira-sans/800.css'
	import '@fontsource/roboto-slab'
	import '@fontsource/roboto-slab/900.css'
	import '@fontsource/fira-mono/500.css'

	import { writable } from 'svelte/store'
	import { setContext } from 'svelte'

	const title = writable('')
	setContext('title', title)
</script>

<svelte:head>
	<title>Studio Art 2023 - Ryly Dou</title>
</svelte:head>

<a class="logo absolute md:fixed z-50 top-2 left-2" href="/">
	{#if $title}
		RD - {$title}
	{:else}
		RYLY DOU
	{/if}
</a>

<article>
	<slot />
</article>

<footer class="py-12 bg-black text-white flex justify-center font-bold">
	<div class="w-full max-w-screen-sm flex flex-row justify-between">
		<ul>
			<li><h1>Pages</h1></li>
			<li><a href="/">Home</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="">About</a></li>
		</ul>
		<ul>
			<li><h1>Works</h1></li>
			<li><a href="">Games</a></li>
			<li><a href="">Sites</a></li>
			<li><a href="">Apps</a></li>
		</ul>
		<ul>
			<li><h1>Links</h1></li>
			<li><a href="">Twitter</a></li>
			<li><a href="">Itch</a></li>
			<li><a href="">Youtube</a></li>
			<li><a href="">Github</a></li>
		</ul>
		<ul>
			<li><h1>Extras</h1></li>
			<li><a href="">Terms</a></li>
			<li><a href="">Status</a></li>
			<li><a href="">Docs</a></li>
		</ul>
	</div>
</footer>

<style lang="postcss">
	:global(body) {
		@apply font-normal bg-white;
	}

	.logo {
		@apply px-4 py-2
			text-lg md:text-2xl
			font-extrabold font-display
			bg-black text-white
			hover:bg-white hover:text-black;
	}

	.logo:hover {
		box-shadow: inset 0 0 0 0.25rem black;
	}

	footer h1 {
		@apply font-extrabold text-xl font-display;
	}

	footer a {
		position: relative;

		@apply text-yellow-400
			/* hover:underline; */;
	}

	footer li:not(:first-child):hover:before,
	footer li:not(:first-child):hover:after {
		/* content: '+';
		position: absolute; */
		list-style: '+ ';
		list-style-position: inside;
	}

	footer a:hover:before,
	footer a:hover:after {
		content: '-';
		position: absolute;
		bottom: -4px;
	}

	footer a::before {
		left: -0.75em;
	}

	footer a::after {
		right: -0.75em;
	}
</style>
