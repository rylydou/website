<script lang="ts">
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	import Gallery from '$lib/Gallery.svelte'
	import Stacker from '$lib/Stacker.svelte'

	import img_car_1 from './static/car-1.jpeg'
	import img_car_2 from './static/car-2.jpeg'
	import img_parrot_1 from './static/parrot-1.jpeg'
	import img_stacker_1 from './static/stacker-1.png'
	import img_stacker_2 from './static/stacker-2.png'
	import stack_burger from './static/burger.png'
	import stack_car from './static/car.png'
	import Slider from '$lib/Slider.svelte'

	const title = getContext('title') as Writable<string>
	title.set("ART '23")

	let items: any[] = [
		{
			id: 1,
			src: img_parrot_1,
			desc: 'The pixel parrot',
		},
		{
			id: 2,
			src: img_car_1,
			desc: 'The stacker slacker 1',
		},
		{
			id: 3,
			src: img_car_2,
			desc: 'The stacker slacker 2',
		},
		{
			id: 4,
			src: img_stacker_1,
			desc: 'The stacker slacker CAD model',
		},
		{
			id: 5,
			src: img_stacker_2,
			desc: 'The sprite stacker tool',
		},
	]

	let burger_separation = 0.0
	let burger_zoom = 1.0
	let stack_3d = true
	let stack_shade = true
</script>

<div class="mt-0 pt-0 w-full h-96 relative">
	<img
		class="object-cover object-center w-full h-full"
		src="https://picsum.photos/seed/-1/1600/900"
	/>
	<div
		class="absolute top-0 left-0 w-full h-full grid place-items-center text-white"
	>
		<div class="flex flex-col gap-2 w-full max-w-screen-sm">
			<div
				class="self-start bg-black px-6 pb-3 pt-2 select-text font-display font-extrabold text-4xl md:text-6xl"
			>
				Studio Art 2023
			</div>
			<div
				class="self-end select-text font-bold px-6 bg-black text-base md:text-2xl"
			>
				Too many holes, not enough rabbits.
			</div>
		</div>
	</div>
</div>

<section>
	<div class="prose">
		<p>
			The theme I choose for this year was <a
				href="https://en.wikipedia.org/wiki/Computer_graphics"
				target="_blank"><strong>Computer Graphics</strong></a
			>. Although it isn't really a theme in the sense of things like
			<em>underwater</em> or <em>darkness</em>, it's still a good starting point
			for finding inspiration. There are many different things that relate to
			the topic and interesting patterns can arise from how technology works.
		</p>

		<p>Here's just a peak at some of the ideas you can get form this topic:</p>
		<ul>
			<li>How display technology works: Pixel and liquid crystals</li>
			<li>Minecraft: Procedural generation, voxels (3d pixels) </li>
		</ul>
	</div>
	<p>Here's a quick gallery of the things I made this year:</p>
	<Gallery {items} />
</section>

<section class="">
	<div class="prose">
		<p> Last year I made a </p>
		<p
			>A piece I made for last year was a game that used this technique used in
			older game called <em>sprite stacking</em>. It's a way to simulating 3D
			graphics when you don't have the ability to do proper 3D graphics. You can
			just layer a bunch of sprites on top of each other and spin them around to
			fake 3D graphics.
		</p>

		<p>Ok so how does this work?</p>

		<div class="columns-2">
			<p>
				Pretend you are making a hamburger. A hamburger starts as just a bunch
				of flat layers. But once they have been stacked then the hamburger
				starts taking shape. Use the slider to on the side to see this in action
				->

				<br />
				<br />

				If it's running a little bit slow for you then play with these switches.
				<br />
				<br />
				<label>
					<input type="checkbox" role="switch" bind:checked={stack_3d} />
					{#if stack_3d}
						Fake 3D
					{:else}
						Real 2D
					{/if}
				</label>

				<label>
					<input type="checkbox" role="switch" bind:checked={stack_shade} />
					{#if stack_shade}
						Shaded
					{:else}
						Unshaded
					{/if}
				</label>
			</p>
			<div class="flex flex-row">
				<input
					orient="vertical"
					type="range"
					bind:value={burger_separation}
					min="0"
					max="10"
					step="0.001"
				/>
				<Stacker
					src={stack_burger}
					layer_count={9}
					quality={stack_3d ? 6 : 1}
					class="w-full h-96 aspect-3/4"
					separation={burger_separation}
					zoom={burger_zoom}
					shade={stack_shade}
					fps={true}
				/>
			</div>
		</div>
	</div>
</section>
<section>
	<Stacker src={stack_car} layer_count={16} class="aspect-square h-96 hidden" />
</section>
