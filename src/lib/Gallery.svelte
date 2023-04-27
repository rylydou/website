<script lang="ts">
	import { crossfade } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	import { quintOut as ease } from 'svelte/easing'
	import { onDestroy, onMount } from 'svelte'

	export let items: any[] = []
	export let autoscroll = false

	let is_expanded = false
	let next_auto_index = 0
	let is_auto_paused = false

	function select(item: any): void {
		let index = items.indexOf(item)
		if (index == 0) {
			is_expanded = !is_expanded
			return
		}

		let previous = items[0]

		items[0] = item
		items[index] = previous
		items = items
	}

	let interval_handle: NodeJS.Timer
	onMount(() => {
		if (!autoscroll) return

		interval_handle = setInterval(() => {
			if (is_auto_paused) return

			next_auto_index += 1
			if (next_auto_index >= items.length) {
				next_auto_index = 1
			}

			select(items[next_auto_index])
		}, 3000)
	})

	onDestroy(() => {
		if (!autoscroll) return

		clearInterval(interval_handle)
	})
</script>

<div class="gallery gap-2" class:expanded={is_expanded}>
	{#each items as item (item.id)}
		<button
			class="item"
			on:click={() => {
				is_auto_paused = true
				select(item)
			}}
			animate:flip={{ duration: 800, easing: ease }}
		>
			<img id="img" src={item.src} draggable="false" />
			<div class="desc md:text-xl font-bold font-display">
				<span class="bg-black px-2 pb-0.5">
					Lorem ipsum dolor sit amet consectetur.
				</span>
			</div>
		</button>
	{/each}

	<div class="placeholder" />
</div>

<style lang="postcss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-auto-rows: 1fr;
	}

	.placeholder {
		grid-column: 1 / span 4;
		grid-row: 1 / span 3;
	}

	.item {
		cursor: pointer;
		will-change: transform;
		background-color: black;
	}

	.item > .desc {
		display: none;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;

		color: white;
		padding: 0.75rem 1.25rem;
		text-align: left;
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
			opacity: 0;
			filter: blur(8px);
		}
		to {
			outline-offset: 0vmax;
			opacity: 1;
			filter: blur(0);
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

	.gallery.expanded > .item:first-child > .desc {
		text-align: center;
		padding-bottom: 4rem;
	}
</style>
