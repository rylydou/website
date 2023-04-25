<script lang="ts">
	import { crossfade } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	import { quintOut as ease } from 'svelte/easing'
	import { trusted } from 'svelte/internal'

	export let items: any[] = []

	let is_expanded = false

	const [send, receive] = crossfade({ duration: 400, easing: ease })

	function select(item: any): void {
		let index = items.indexOf(item)
		if (index == 0) {
			is_expanded = !is_expanded
			console.log('expanded')

			return
		}

		let previous = items[0]

		items[0] = item
		items[index] = previous
		items = items
	}
</script>

<div class="gallery gap-2 p-2" class:expanded={is_expanded}>
	{#each items as item (item.id)}
		<button
			class="item overflow-clip rounded-xl"
			style="--c: black;"
			on:click={() => select(item)}
			animate:flip={{ duration: 400, easing: ease }}
			in:receive={{ key: item.id }}
			out:send={{ key: item.id }}
		>
			<img class="" src={item.src} alt={item.alt || ':('} draggable="false" />
			<div class="desc font-bold">
				Lorem ipsum dolor sit amet consectetur. - &copy; 2023
			</div>
		</button>
	{/each}
</div>

<style lang="postcss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(5, 100px);
		grid-auto-rows: 100px;
	}

	.item {
		cursor: pointer;
		will-change: transform;
		/* position: relative; */
		background-color: var(--c);
	}

	.item > .desc {
		visibility: hidden;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;

		color: white;
		padding: 1rem 1.5rem;
		text-align: left;
		background-image: linear-gradient(to top, black, transparent);
	}

	.item > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		will-change: transform;
	}

	.item:first-child {
		z-index: 1;
		grid-column: 2 / span 4;
		grid-row: 1 / span 3;
	}

	.item:first-child > .desc {
		visibility: visible;
	}

	@keyframes fullscreen_fade {
		from {
			opacity: 0;
			scale: 0.75;
			border-radius: 100%;
			filter: blur(8px);
		}
		to {
			opacity: 1;
			scale: 1;
			border-radius: 0;
			filter: blur(0);
		}
	}

	.gallery.expanded > .item:first-child {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 0;
	}

	.gallery.expanded > .item:first-child > img {
		object-fit: contain;
		animation: fullscreen_fade 400ms ease;
	}
</style>
