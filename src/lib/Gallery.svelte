<script lang="ts">
	import { crossfade } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	import { quintOut as ease } from 'svelte/easing'
	import { trusted } from 'svelte/internal'

	import { FastAverageColor } from 'fast-average-color'
	const fac = new FastAverageColor()

	export let items: any[] = []

	let is_expanded = false
	let current_color = '#000000'

	const [send, receive] = crossfade({ duration: 400, easing: ease })

	function select(item: any): void {
		let index = items.indexOf(item)
		if (index == 0) {
			is_expanded = !is_expanded
			return
		}

		if (!item.color) {
			fac.getColorAsync(item.src).then((color) => {
				item.color = color.hex
				current_color = item.color
			})
		} else {
			current_color = item.color
		}

		let previous = items[0]

		items[0] = item
		items[index] = previous
		items = items
	}
</script>

<div class="gallery gap-2" class:expanded={is_expanded}>
	{#each items as item (item.id)}
		<button
			class="item"
			style="--c: {'#000000'};"
			on:click={() => select(item)}
			animate:flip={{ duration: 400, easing: ease }}
			in:receive={{ key: item.id }}
			out:send={{ key: item.id }}
		>
			<img id="img" src={item.src} alt={item.alt || ':('} draggable="false" />
			<div class="desc font-bold">
				Lorem ipsum dolor sit amet consectetur.
			</div>
		</button>
	{/each}
</div>

<style lang="postcss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-auto-rows: 1fr;
	}

	.item {
		cursor: pointer;
		will-change: transform;
		/* position: relative; */
		background-color: var(--c);
	}

	.item > .desc {
		display: none;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;

		color: white;
		padding: 0.75rem 1.25rem;
		text-shadow: 0 0 4px black;
		text-align: left;
		//background-image: linear-gradient(to top, black, transparent);
	}

	.item > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		will-change: transform;
	}

	.item:first-child {
		cursor: zoom-in;

		z-index: 1;
		grid-column: 1 / span 4;
		grid-row: 1 / span 3;
	}

	.item:first-child > .desc {
		display: block;
	}

	@keyframes fullscreen_fade {
		from {
			outline-offset: -50vmax;
		}
		to {
			outline-offset: 0vmax;
		}
	}

	.gallery.expanded > .item:first-child {
		cursor: default;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 0;
	}

	.gallery.expanded > .item:first-child > img {
		cursor: zoom-out;
		object-fit: contain;
		animation: fullscreen_fade 400ms ease;
		outline: solid 50vmax black;
	}
</style>
