<script lang="ts">
	import { crossfade } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	import { quintOut as ease } from 'svelte/easing'

	export let items: any[] = []

	let opened = items[0]
	$: unopened_items = items.filter(({ id }) => opened.id !== id)

	const [send, receive] = crossfade({ duration: 400, easing: ease })
</script>

{#each [opened] as _ (opened.id)}
	<div class="gallery absolute gap-2 p-2">
		<div
			class="main rounded-md overflow-clip"
			in:receive={{ key: opened.id }}
			out:send={{ key: opened.id }}
		>
			<img class="" src={opened.src} alt="image" />
		</div>

		{#each unopened_items as item (item.id)}
			<!--svelte-ignore a11y-click-events-have-key-events-->
			<img
				class="item rounded-md"
				src={item.src}
				alt="img"
				on:click={() => (opened = item)}
				in:receive={{ key: item.id }}
				out:send={{ key: item.id }}
				animate:flip
				draggable="false"
			/>
		{/each}
	</div>
{/each}

<style lang="postcss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(5, 200px);
		grid-template-rows: repeat(4, 200px);
	}

	.main {
		grid-column: 1 / 5;
		grid-row: 1 / 4;
		object-fit: cover;
	}

	.main > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.item {
		cursor: pointer;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
