<script lang="ts">
	import '@fontsource/pacifico'

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
	import { video_background_play as video_background } from '$lib/actions/video'
	import Rabbit from './Rabbit.svelte'

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

<div class="grid place-items-center bg-amber-400 p-4">
	<Rabbit />
</div>

<section>
	<div class="prose">
		<p>
			Last year I made the mistake of now having a theme. It made it grueling to come up with ideas.
			A theme helps give focus and limits the decision paralysis one might get without one. At the
			same time I still didn’t want my theme to be something like <em>“underwater”</em> or
			<em>“darkness”</em> because themes like that tend to be too restrictive and too boring. I
			always found the themes for the game jams I participated in very interesting. They were always
			some kind of common saying or phrase from a movie like “What goes up must come down”, “Less is
			more”, or “Stuck in a loop”. But some of the most fun game jams would be based on some sort of
			restriction like “Made for the GameBoy”, “1-Bit” (only two colors), or “A 64x64 Resolution”. I
			know it sounds weird to say, but having a resection is somehow less restrictive than being
			forced to flow a traditional theme like <em>“underwater”</em>. I think it’s more fun to figure
			out how to create something out of a really strange restriction or phrase.
		</p>

		<p>
			That is why this year I chose to have the theme of <code>Computer Graphics</code> this year. I
			know, it sounds really boring, but hear me out. You could make something with the limitations
			of computer graphics in mind, like pixel art. Or you could make something about computer
			graphics, like drawing something inspired by the complex patterns of copper traces on a
			circuit board. I was really excited by this theme and all the many ways it could be taken. But
			there was one thing looming over me: <strong>Time</strong>.
		</p>
		<hr />
	</div>
</section>

<section>
	<div class="prose">
		<p>
			Driving games tend to give more control over how players can move their avatars at the cost of
			ease. Unlike other games the player can’t just press the “go right” button and have the
			vehicle actually go right. The player must turn the car to the right then accelerate. This
			means that the vehicle needs to be able to turn very smoothly in order to give the proper
			impression that it is turning.
		</p>

		<div class="columns-2">
			<div class="grid place-content-center">
				<img class="pixel zoomable animate-spin-slow w-28 h-auto" src="./static/spr-top.webp" />
			</div>
			<p>
				An easy way to do this is by just taking one sprite and rotating it based on the direction
				the player is facing.
			</p>
		</div>

		<div class="columns-2">
			<p>
				But this requires that the camera must be at a bird eye view at all times or else this will
				happen.
			</p>
			<div class="grid place-content-center">
				<img class="pixel zoomable animate-spin-slow w-28 h-auto" src="./static/spr-side.webp" />
			</div>
		</div>

		<div class="columns-2">
			<img class="zoomable pixel m-0" src="./static/mk-1.webp" />
			<p>
				The solution older games would use is to just painstakingly draw a bunch of different
				sprites for each of the angles the player could be facing. One of the games that this is the
				original Mario Kart on the SNES. I couldn’t imagine how difficult and time consuming this
				was for the artists.
			</p>
		</div>
	</div>
</section>

<section class="blk">
	<div class="relative grid place-items-center w-full max-w-screen-lg aspect-video">
		<video
			class="absolute right-0 top-0 h-full object-cover pixel"
			style=""
			src="./static/mushvroom.webm"
			loop
			muted
			playsinline
			use:video_background
		/>

		<div class="absolute max-w-screen-lg h-full grid place-content-end p-4 pointer-events-none">
			<p class="bottom-0 left-0 text-white font-bold bg-black px-3 py-2 w-[50%]">
				In this project I made last year I used a technique to draw the vehicle. This technique
				saved me drawing the dozens of required sprites for all of the angles.
			</p>
		</div>
	</div>

	<div class="prose">
		<p>
			This technique is called sprite stacking. It's a way to sort of fake 3D graphics when you only
			have the ability to actually do 2d graphics.
		</p>

		<p class="text-center italic">Ok so how does this work?</p>
	</div>
</section>

<section>
	<div class="columns-2 gap-0">
		<div class="prose">
			<p>
				Pretend you are making a delicious hamburger. The parts that make up a complete burger are
				pretty flat when looked at on their own. But only once they have been stacked on top one
				another is when the burger starts to take shape. <strong>
					Use the slider to the left to see this in action.
				</strong>
			</p>

			<p>
				Here are some switches if things are running too slow.

				<label class="mt-2">
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
			</p>
		</div>

		<div class="flex flex-row">
			<input
				orient="vertical"
				type="range"
				bind:value={burger_separation}
				min="0"
				max="10"
				step="0.1"
			/>
			<Stacker
				src={stack_burger}
				layer_count={9}
				quality={stack_3d ? 6 : 1}
				class="w-full h-96 aspect-3/4 flex-grow"
				separation={burger_separation}
				zoom={burger_zoom}
				shade={stack_shade}
				fps={true}
			/>
		</div>
	</div>
</section>

<section>
	<div class="prose">
		<p>
			I thought that this could be a really interesting way to make some sort of… sculpture? Making
			the cart in real life is pretty cool right? But there’s one slight problem: I’m stupid. From
			my experience from drawing the sprites for the driving game, it’s hard. There’s no way I would
			be able to track all of those layers on more complex objects. So I made a tool to help me.
			Yeah I know it’s not pretty, but it sure is functional… except for undo, it does not have
			that.
		</p>

		<p>This tool made it trivial to design the cart. I mean just look at it, it's glorious...</p>

		<Stacker
			class="w-96 h-96 mx-auto"
			src={stack_car}
			layer_count={16}
			quality={stack_3d ? 4 : 1}
			shade={stack_shade}
		/>

		<p>
			Once it was designed I had to choose the scale for how I would physically make the cart. I
			made each pixel 5mm and the cardboard I was using was 1mm thick which means that each layer
			would have to be repeated 5 times. There are 16 layers in the model times 5 which means that I
			have to cut out 80 real life layers… yikes. It didn't end up taking as long as I expected–only
			two weeks–to finish the model. And as a warning to any future people doing this: <strong
				>DON’T</strong
			>, my wrists wanted to die by the end of it.
		</p>
		<img src="./static/car-2.webp" />
	</div>
</section>
