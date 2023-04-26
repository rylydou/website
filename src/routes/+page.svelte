<script lang="ts">
	import Gallery from '$lib/Gallery.svelte'

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

<section class="grid place-items-center bg-black text-white pt-16 pb-6">
	<div class="max-w-screen-sm">
		<Gallery {items} />
	</div>
</section>

<section class="grid place-items-center pt-8">
	<div
		class="max-w-screen-sm select-text prose prose-neutral prose-pre:bg-neutral-200 prose-pre:text-black prose-pre:rounded-none prose-headings:font-display"
	>
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
