<script lang="ts">
	import '@fontsource/pacifico'

	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	import Stacker from '$lib/Stacker.svelte'
	import { video_background_play as video_background } from '$lib/actions/video'

	import RabbitHero from './RabbitHero.svelte'
	import stack_burger from './static/stack-burger.webp'
	import stack_car from './static/stack-car.webp'

	const title = getContext('title') as Writable<string>
	title.set("ART '23")

	let burger_separation = 0.0
	let burger_zoom = 1.0
	let stack_3d = true
	let stack_shade = true
</script>

<div class="w-full pt-0 h-96 bg-yellow-400">
	<div class="relative w-full h-full grid place-items-center text-white pt-8">
		<div class="flex flex-col gap-1.5 w-full max-w-screen-sm p-2">
			<div
				class="self-center sm:self-start bg-black px-6 pb-3 pt-2 select-text font-display font-extrabold text-4xl sm:text-6xl"
			>
				Studio Art 2023
			</div>
			<div
				class="self-center sm:self-end select-text font-bold px-6 py-1 bg-black text-lg sm:text-2xl"
			>
				Too many holes, not enough rabbits.
			</div>
		</div>

		<div
			class="absolute left-0 right-0 bottom-0 top-0 flex flex-row justify-center px-8 py-14 sm:py-4"
		>
			<RabbitHero class="grid grid-cols-6 gap-6 sm:gap-8 content-between" />
		</div>
	</div>
</div>

<section>
	<div class="prose">
		<p>
			Last year, I made the mistake of not having a theme. It made it grueling to come up with
			ideas. A theme helps give focus and limits the decision paralysis one might get without one.
			At the same time I still didn’t want my theme to be something like <em>“underwater”</em> or
			<em>“darkness”</em> because themes like that tend to be too restrictive and too boring. I
			always found the themes for the game jams I participated in very interesting. They were always
			some kind of common saying or phrase from a movie like “What goes up must come down”, “Less is
			more”, or “Stuck in a loop”. But some of the most fun game jams would be based on some sort of
			restriction like “Made for the GameBoy”, “1-Bit” (only two colors), or “A 64x64 Resolution”. I
			know it sounds weird to say, but having a restriction is somehow less restrictive than being
			forced to flow a traditional theme like <em>“underwater”</em>. I think it’s more fun to figure
			out how to create something out of a really strange restriction or phrase.
		</p>

		<p>
			That is why this year I chose to have the theme of <code>Computer Graphics</code>. I know, it
			sounds really boring, but hear me out. You could make something with the limitations of
			computer graphics in mind, like pixel art. Or you could make something about computer
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

		<div class="grid place-content-center">
			<img class="pixel zoomable animate-spin-slow w-28 h-auto" src="./static/spr-top.webp" />
		</div>
		<p>
			An easy way to do this is by just taking one sprite and rotating it based on the direction the
			player is facing.
		</p>

		<div class="grid flex-col sm:flex-row place-content-center">
			<img class="pixel zoomable animate-spin-slow w-28 h-auto" src="./static/spr-side.webp" />
		</div>
		<p>
			But this requires that the camera must be at a bird eye view at all times or else this will
			happen.
		</p>

		<div class="flex flex-col items-center gap-4">
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

<section class="blk min-h-screen flex flex-col justify-evenly">
	<p class="prose">
		In this project I made last year I used a technique to draw the vehicle. This technique saved me
		drawing the dozens of required sprites for all of the angles. This technique is called sprite
		stacking. It's a way to sort of fake 3D graphics when you only have the ability to actually do
		2d graphics.
	</p>

	<video
		class="aspect-video w-full max-w-screen-lg h-full pixel"
		style=""
		src="./static/mushvroom.webm"
		loop
		muted
		playsinline
		use:video_background
	/>

	<div class="prose">
		<p class="text-center italic">Ok so how does this work?</p>
	</div>
</section>

<section>
	<div class="w-full flex flex-col md:flex-row gap-4 md:gap-0 px-2 md:px-0">
		<div class="prose mx-auto">
			<p>
				Pretend you are making a delicious hamburger. The parts that make up a complete burger are
				pretty flat when looked at on their own. But only once they have been stacked on top one
				another is when the burger starts to take shape. <strong>
					Use the slider to see this in action.
				</strong>
			</p>

			<div class="info">Use the slider to see this in action.</div>

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

		<div class="flex flex-row px-2 sm:px-0">
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
				class="w-full h-80 sm:h-96 sm:aspect-3/4 flex-grow"
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
			Yeah I know it’s not pretty, but it sure is functional… except for an undo button, it does not
			have that.
		</p>

		<p>This tool made it trivial to design the cart. I mean just look at it, it's glorious...</p>

		<Stacker
			class="w-96 h-96 mx-auto"
			src={stack_car}
			layer_count={16}
			quality={stack_3d ? 4 : 1}
			shade={false}
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
