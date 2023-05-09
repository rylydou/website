<script lang="ts">
	import Gallery from '$lib/Gallery.svelte'
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	async function generate_placeholder_images(count: number): Promise<any[]> {
		let arr: any[] = []
		for (let index = 1; index < count + 1; index++) {
			arr.push({
				id: index,
				src: `https://picsum.photos/seed/${index}/1600/1200`,
			})
		}
		return arr
	}
	let items: any[] = []
	generate_placeholder_images(9).then((arr) => (items = arr))

	const title = getContext('title') as Writable<string>
	title.set('')
</script>

<!-- <section class="grid place-items-center bg-black text-white pb-6">
	<div class="max-w-screen-sm">
		<Gallery {items} />
	</div>
</section> -->

<section class="h-screen">
	<div class="prose">
		<h1>
			<a href="/art">Studio Art 2023</a>
		</h1>

		<div class="info">This site is still a work in progress</div>
	</div>
</section>
