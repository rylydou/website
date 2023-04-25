<script lang="ts">
	import Gallery2 from '$lib/Gallery2.svelte'
	import Gallery from '../lib/Gallery.svelte'

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
</script>

<div class="w-full h-screen grid place-items-center bg-gray-50">
	<div
		class="flex flex-row max-w-4xl w-full p-2 rounded-2xl bg-white border-4 border-black shadow-xl"
	>
		<Gallery2 {items} />
		<div class="flex flex-col p-2">
			<h1 class="text-lg font-bold">A gallery title</h1>
		</div>
	</div>
</div>
