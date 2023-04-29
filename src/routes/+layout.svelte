<script>
	import '$lib/styles/index.css'

	import '@fontsource/fira-sans'
	import '@fontsource/fira-sans/500.css'
	import '@fontsource/fira-sans/800.css'
	import '@fontsource/roboto-slab'
	import '@fontsource/roboto-slab/900.css'
	import '@fontsource/fira-mono/500.css'
	import '@fontsource/noto-serif'

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

<footer class="py-12 px-4 bg-black text-white flex justify-center font-bold">
	<div
		class="w-full max-w-screen-sm flex flex-row justify-between flex-wrap gap-4 text-right sm:text-left"
	>
		<ul class="text-red-400">
			<li><h1>Pages</h1></li>
			<li><a href="/">Home</a></li>
			<!-- <li><a href="/blog">Blog</a></li> -->
			<!-- <li><a href="/about">About</a></li> -->
		</ul>
		<ul class="text-yellow-400">
			<li><h1>Works</h1></li>
			<li><a href="https://ciber-turtle.itch.io" target="_blank">Games</a></li>
			<li><a href="/art">Art</a></li>
		</ul>
		<ul class="text-lime-400">
			<li><h1>Links</h1></li>
			<li><a href="https://github.com/CiberTurtle" target="_blank">Github</a></li>
			<li><a href="https://ciber-turtle.itch.io" target="_blank">Itch.io</a></li>
			<li><a href="https://twitter.com/CiberTurtle" target="_blank">Twitter</a></li>
			<li><a href="https://www.youtube.com/@ciber_turtle" target="_blank">Youtube</a></li>
		</ul>
		<ul class="text-sky-400">
			<li><h1>Extras</h1></li>
			<li><a href="#" on:click={() => (window.scrollY = 0)}>Back to top</a></li>
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
			bg-black text-white;
	}

	.logo:hover {
		@apply underline underline-offset-2
			/* bg-white text-black; */;
		text-decoration-thickness: 2px;
		/* box-shadow: inset 0 0 0 0.125rem black; */
	}

	footer h1 {
		@apply font-extrabold text-xl font-display text-white;
	}

	footer ul a {
		position: relative;

		/* @apply text-yellow-400; */
	}

	footer ul a:hover:before,
	footer ul a:hover:after {
		content: '-';
		position: absolute;
		bottom: -4px;
	}

	footer ul a[target='_blank']:hover:before,
	footer ul a[target='_blank']:hover:after {
		content: '+';
	}

	footer ul a::before {
		left: -0.75em;
	}

	footer ul a::after {
		right: -0.75em;
	}
</style>
