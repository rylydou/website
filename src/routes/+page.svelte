<script>
	import Gallery from '../lib/Gallery.svelte'

	const items = [
		{ id: 1, src: 'https://source.unsplash.com/400x300?cat' },
		{ id: 2, src: 'https://source.unsplash.com/400x300?dog' },
		{ id: 3, src: 'https://source.unsplash.com/400x300?mouse' },
		{ id: 4, src: 'https://source.unsplash.com/400x300?fish' },
		{ id: 5, src: 'https://source.unsplash.com/400x300?rat' },
		{ id: 6, src: 'https://source.unsplash.com/400x300?chicken' },
		{ id: 7, src: 'https://source.unsplash.com/400x300?bird' },
		{ id: 8, src: 'https://source.unsplash.com/400x300?deer' },
		{ id: 9, src: 'https://source.unsplash.com/400x300?bug' },
	]
</script>

<div class="w-full h-screen grid place-items-center">
	<Gallery {items} />
</div>
