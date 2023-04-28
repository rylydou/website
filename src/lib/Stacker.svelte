<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { is_in_viewport } from './util'

	const SQRT_2 = 1.414213562

	export let src: string
	export let layer_count: number
	export let thickness = 1.0
	export let separation = 0.0
	export let quality = 4.0
	export let offset = 0.0

	let img: HTMLImageElement

	let canvas: HTMLCanvasElement
	let width: number
	let height: number

	$: {
		if (width && height) {
			let factor = 1 // TODO Detect low end systems to use half resolution.

			canvas.width = width / factor
			canvas.height = height / factor
		}
	}

	let ctx: CanvasRenderingContext2D

	let stop_render = false

	onMount(() => {
		if (!canvas) return

		ctx = canvas.getContext('2d') as CanvasRenderingContext2D
		ctx.imageSmoothingEnabled = false

		img = document.createElement('img')
		// img.onload = () => window.requestAnimationFrame(render)
		img.src = src

		let observer = new IntersectionObserver((entries, observer) => {
			if (entries[0].intersectionRatio > 0) {
				stop_render = false
				window.requestAnimationFrame(render)
			} else {
				stop_render = true
			}
		})
		observer.observe(canvas)
	})

	onDestroy(() => {})

	let time = 0.0
	let previous_timestamp: DOMHighResTimeStamp
	function render(timestamp: DOMHighResTimeStamp) {
		if (stop_render) {
			stop_render = false
			return
		}
		if (!canvas) return
		if (!ctx) return
		if (!img) return

		let delta = timestamp - previous_timestamp
		if (!isNaN(delta)) {
			time += delta
		}
		previous_timestamp = timestamp

		ctx.imageSmoothingEnabled = false
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		ctx.fillText(`${Math.round(1000 / delta)} fps`, 8, 8)
		const q = quality
		// const q = 1000 / delta < 30 ? Math.floor(quality / 2) : quality

		let rotation = ((time / 1000) * Math.PI * 2) / 10

		const layer_width = img.width / layer_count
		const layer_height = img.height
		const layer_max = Math.max(layer_width, layer_height)

		const height = layer_count * thickness + layer_count * separation
		const base = height / -2 + height * offset

		const scale = Math.min(
			canvas.width / (layer_max * SQRT_2),
			canvas.height / (height + layer_max * SQRT_2)
		)

		let y = -base

		ctx.filter = `blur(${1 * scale}px) brightness(0)`
		ctx.globalAlpha = 0.5
		ctx.translate(canvas.width / 2, canvas.height / 2) // center canvas
		ctx.translate(0, y * scale) // offset
		ctx.rotate(rotation) // rotation
		ctx.translate((-layer_width * scale) / 2, (-layer_height * scale) / 2) // center layer
		ctx.scale(scale, scale) // zoom scale
		ctx.drawImage(
			img,
			// source rect
			0,
			0,
			layer_width,
			layer_height,
			// dest rect
			0,
			0,
			layer_width,
			layer_height
		)

		ctx.resetTransform()
		ctx.globalAlpha = 1
		ctx.filter = 'none'

		const step = thickness / q
		for (let layer_index = 0; layer_index < layer_count; layer_index++) {
			// const block_ratio = layer_index / (layer_count - 1)
			// const bri = lerp(0.75, 1, block_ratio)
			// ctx.filter = `brightness(${bri})`

			for (let index = 0; index < q; index += 1) {
				// const ratio = (layer_index * q + index) / (layer_count * q)
				ctx.translate(canvas.width / 2, canvas.height / 2) // center canvas
				ctx.translate(0, y * scale) // offset
				ctx.rotate(rotation) // rotation
				ctx.translate((-layer_width * scale) / 2, (-layer_height * scale) / 2) // center layer
				ctx.scale(scale, scale) // zoom scale
				ctx.drawImage(
					img,
					// source rect
					layer_width * layer_index,
					0,
					layer_width,
					layer_height,
					// dest rect
					0,
					0,
					layer_width,
					layer_height
				)

				y -= step

				ctx.resetTransform()
			}

			y -= separation
		}

		requestAnimationFrame(render)
	}

	function lerp(a: number, b: number, t: number): number {
		return (1 - t) * a + t * b
	}
</script>

<canvas
	bind:this={canvas}
	bind:clientWidth={width}
	bind:clientHeight={height}
	{...$$restProps}
/>
