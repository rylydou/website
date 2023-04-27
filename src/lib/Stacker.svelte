<script lang="ts">
	import { onDestroy, onMount } from 'svelte'

	export let src: string
	export let layer_count: number

	let img: HTMLImageElement
	img = new HTMLImageElement()
	img.src = src

	let canvas: HTMLCanvasElement
	let ctx: CanvasRenderingContext2D
	onMount(() => {
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D
		ctx.imageSmoothingEnabled = false
		ctx.imageSmoothingQuality = 'low'

		window.requestAnimationFrame(render)
	})

	onDestroy(() => {})

	let time = 0.0
	let previous_timestamp: DOMHighResTimeStamp
	function render(timestamp: DOMHighResTimeStamp) {
		let delta = timestamp - previous_timestamp
		if (!isNaN(delta)) {
			time += delta
		}
		previous_timestamp = timestamp

		let rotation = time / 1000
		for (let layer_index = 0; layer_index < layer_count; layer_index++) {
			let sx = img.width / layer_count
			ctx.drawImage(img, 0, 0, sx * layer_index, 0)
		}
	}
</script>

<canvas bind:this={canvas} />
