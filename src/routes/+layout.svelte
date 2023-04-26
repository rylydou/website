<script>
	import '../app.css'

	import '@fontsource/fira-sans'
	import '@fontsource/fira-sans/800.css'
	import '@fontsource/roboto-slab'
	import '@fontsource/roboto-slab/800.css'
	import '@fontsource/fira-mono'
</script>

<a
	class="logo absolute md:fixed top-2 left-2 text-2xl font-extrabold font-display text-white px-4 py-2 z-50 mix-blend-difference hover:bg-white hover:text-black"
	href="/"
>
	RD:TTSW
</a>
<slot />

<footer class="py-12 mt-12 bg-black text-white flex justify-center">
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

	footer h1 {
		@apply font-extrabold text-xl;
	}

	footer a {
		@apply text-yellow-400 hover:underline;
	}
</style>
