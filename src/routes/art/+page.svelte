<script lang="ts">
	import Gallery from '$lib/Gallery.svelte'
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	const title = getContext('title') as Writable<string>
	title.set("ART '23")

	async function generate_placeholder_images(count: number): Promise<any[]> {
		let arr: any[] = []
		for (let index = 1; index < count + 1; index++) {
			arr.push({
				id: index,
				src: `https://picsum.photos/seed/${index}/1600/900`,
			})
		}
		return arr
	}
	let items: any[] = []
	generate_placeholder_images(9).then((arr) => (items = arr))
</script>

<div class="mt-0 pt-0 w-full h-96 relative">
	<img
		class="object-cover object-center w-full h-full"
		src="https://picsum.photos/seed/-1/1600/900"
	/>
	<div
		class="absolute top-0 left-0 w-full h-full grid place-items-center text-white"
	>
		<div class="flex flex-col gap-1 items-end">
			<span
				class="bg-black px-6 pb-3 pt-2 select-text font-display font-extrabold text-4xl md:text-6xl"
			>
				Studio Art 2023
			</span>
			<span class="select-text font-bold px-6 bg-black text-base md:text-2xl">
				Sophomore Year Semester 2
			</span>
		</div>
	</div>
</div>

<section>
	<div class="prose">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat
		sapiente cupiditate molestias ad corporis soluta, minus eligendi voluptates
		explicabo natus! Adipisci ipsa magni facilis accusamus ratione porro
		incidunt dolore.
	</div>
	<Gallery {items} />
	<div class="prose">
		<h1> Lorem ipsum dolor sit amet </h1>

		<p
			><strong>Pellentesque habitant morbi tristique</strong> senectus et netus
			et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
			vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
			quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris
			placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
			pharetra. Vestibulum erat wisi, condimentum sed,
			<code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit
			eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
			enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
			felis.</p
		>

		<h2>Lorem ipsum dolor sit amet</h2>

		<ol>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
			<li>Aliquam tincidunt mauris eu risus.</li>
		</ol>

		<blockquote
			><p
				>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna.
				Cras in mi at felis aliquet congue. Ut a est eget ligula molestie
				gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis,
				tellus est malesuada tellus, at luctus turpis elit sit amet quam.
				Vivamus pretium ornare est.</p
			></blockquote
		>

		<h3>Lorem ipsum dolor sit amet</h3>

		<ul>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
			<li>Aliquam tincidunt mauris eu risus.</li>
		</ul>

		<pre
			><code
				>#header h1 a [
	display: block;
	width: 300px;
	height: 80px;
]</code
			></pre
		>
	</div>
</section>
