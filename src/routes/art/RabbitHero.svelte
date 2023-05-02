<script lang="ts">
	import Rabbit from './Rabbit.svelte'

	let rabbits: boolean[] = Array(12)
	rabbits.fill(false)
	rabbits[rabbits.length - 2] = true

	function shuffle(index: number) {
		if (!rabbits[index]) return

		rabbits.fill(false)
		let new_index = 0
		do {
			new_index = Math.floor(Math.random() * rabbits.length)
		} while (new_index == index)
		rabbits[new_index] = true

		rabbits = rabbits
	}
</script>

<div {...$$restProps}>
	{#each rabbits as rabbit, index (index)}
		<Rabbit hidden={!rabbit} on:hover={() => shuffle(index)} />
	{/each}
</div>
