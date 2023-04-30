<script lang="ts">
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	import Gallery from '$lib/Gallery.svelte'
	import Stacker from '$lib/Stacker.svelte'

	import img_car_1 from './static/car-1.webp'
	import img_car_2 from './static/car-2.webp'
	import img_parrot from './static/parrot.webp'
	import img_car from './static/car.webp'
	import img_stacker from './static/stacker.webp'
	import img_awakening_1 from './static/awakening-1.webp'
	import img_awakening_map from './static/awakening-map.webp'
	import stack_burger from './static/stack-burger.webp'
	import stack_car from './static/stack-car.webp'

	import { shuffle } from '$lib/util'
	import { video_background_play } from '$lib/actions/video'

	const title = getContext('title') as Writable<string>
	title.set("ART '23")

	let items: any[] = [
		{
			id: 1,
			src: img_parrot,
			desc: 'The pixel parrot',
		},
		{
			id: 2,
			src: img_awakening_map,
			desc: 'A work in progress map of Awakening',
		},
		{
			id: 3,
			src: img_car_2,
			desc: 'The stacker slacker IRL',
		},
		{
			id: 4,
			src: img_car,
			desc: 'The stacker slacker CAD model',
		},
		{
			id: 5,
			src: img_stacker,
			desc: 'The sprite stacker tool',
		},
		{
			id: 6,
			src: img_awakening_1,
			desc: 'Awakening',
		},
		{
			id: 7,
			src: img_car_1,
			desc: 'The stacker slacker IRL (alternate angle)',
		},
	]
	items = shuffle(items)

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
	<div class="absolute top-0 left-0 w-full h-full grid place-items-center text-white">
		<div class="flex flex-col gap-1.5 w-full max-w-screen-sm">
			<div
				class="self-start bg-black px-6 pb-3 pt-2 select-text font-display font-extrabold text-4xl md:text-6xl"
			>
				Studio Art 2023
			</div>
			<div class="self-end select-text font-bold px-6 py-1 bg-black text-base md:text-2xl">
				Too many holes, not enough rabbits.
			</div>
		</div>
	</div>
</div>

<section>
	<div class="prose">
		<p>
			The theme I choose for this year was <strong>Computer Graphics</strong>. Although it isn't
			really a theme in the sense of things like
			<em>underwater</em> or <em>darkness</em>, it's still a good starting point for finding
			inspiration. There are many different things that relate to the topic and interesting patterns
			can arise from how technology works.
		</p>

		<p>Here's just a peak at some of the ideas you can get form this topic:</p>
		<ul>
			<li>How display technology works: Pixel and liquid crystals</li>
			<li>Minecraft: Procedural generation, voxels (3d pixels) </li>
		</ul>
		<p>Here's a quick gallery of the things I made this year:</p>
	</div>
	<Gallery {items} />
</section>

<section>
	<div class="relative grid place-items-center w-full max-w-screen-lg aspect-video">
		<video
			class="absolute right-0 top-0 h-full object-cover pixel"
			style=""
			src="./static/mushvroom.webm"
			loop
			muted
			playsinline
			use:video_background_play
		/>

		<div class="absolute max-w-screen-lg h-full grid place-content-end p-4 pointer-events-none">
			<p class="bottom-0 left-0 text-white font-bold bg-black px-3 py-2 w-[50%]">
				This is a protoype of a driving game I made last year. In a driving game you need to be able
				turn smoothly which would traditionally require you to draw many different sprites for all
				the angles you could be facing.
			</p>
		</div>
	</div>
</section>

<section>
	<div class="prose columns-2">
		<p>
			Some older games like the original Mario Kart on the SNES would do this. The problem is that
			it is a lot of work to do. You would have to painstakingly draw out each angle by hand which
			work take a lot of time.
		</p>
		<img class="img pixel" src="./static/mk-1.webp" />
	</div>

	<div class="prose">
		<p>
			A solution to that problem used in games around that era is <strong>Sprite Stacking</strong>.
			It's a way to simulating 3D graphics when you don't have the ability to do proper 3D graphics.
			You can just layer a bunch of sprites on top of each other and spin them around to fake 3D
			graphics.
		</p>

		<p class="text-center italic">Ok so how does this work?</p>
	</div>

	<div class="columns-2 gap-0">
		<div class="flex flex-row">
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
			<input
				orient="vertical"
				type="range"
				bind:value={burger_separation}
				min="0"
				max="10"
				step="0.1"
			/>
		</div>

		<div class="prose ml-1">
			<p>
				Pretend you are making a delicious burger. A burger starts as just a bunch of flat layers.
				But once they have been stacked then the hamburger starts taking shape.
				<strong>Use the slider to on the side to see this in action.</strong>
				<br /><br />
				<span>
					Here are some switches if things are running too slow.
					<br /><br />
					<label>
						<input type="checkbox" role="switch" bind:checked={stack_3d} />
						{#if stack_3d}
							Fake 3D (slower)
						{:else}
							Real 2D (faster)
						{/if}
					</label>
					<label>
						<input type="checkbox" role="switch" bind:checked={stack_shade} />
						{#if stack_shade}
							Shaded (slower)
						{:else}
							Unshaded (faster)
						{/if}
					</label>
				</span>
			</p>
		</div>
	</div>
</section>
<section>
	<Stacker src={stack_car} layer_count={16} class="aspect-square h-96 hidden" />
</section>
