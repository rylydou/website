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
	export let zoom = 1.0
	export let shade = true
	export let fps = false

	let img: HTMLImageElement
	let img_error = false

	let container: HTMLDivElement
	let canvas: HTMLCanvasElement
	let container_width = 100
	let container_height = 100

	let ctx: CanvasRenderingContext2D

	let stop_render = false

	onMount(() => {
		if (!canvas) return

		ctx = canvas.getContext('2d') as CanvasRenderingContext2D

		let observer = new IntersectionObserver((entries, observer) => {
			if (entries[0].intersectionRatio > 0) {
				stop_render = false
				start()
			} else {
				stop_render = true
			}
		})
		observer.observe(canvas)
	})

	function start() {
		if (!is_init) init()
		queue_render()
	}

	let is_init = false
	function init() {
		is_init = true
		img = new Image()
		img.src = src
		img.onerror = () => {
			img_error = true
		}
	}

	function queue_render() {
		requestAnimationFrame(render)
	}

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

		ctx.clearRect(0, 0, canvas.width, canvas.height)

		let delta = timestamp - previous_timestamp
		previous_timestamp = timestamp

		if (img_error) {
			ctx.font = "16px 'Fira sans'"
			ctx.fillStyle = 'red'
			const txt = 'Could not load :('
			const size = ctx.measureText(txt)
			ctx.fillText(
				txt,
				(canvas.width - size.width) / 2,
				(canvas.height - size.actualBoundingBoxDescent) / 2
			)
			queue_render()
			return
		}

		if (!img.complete || !img.src) {
			ctx.font = "16px 'Fira sans'"
			const txt = 'Loading...'
			const size = ctx.measureText(txt)
			ctx.fillText(
				txt,
				(canvas.width - size.width) / 2,
				(canvas.height - size.actualBoundingBoxDescent) / 2
			)
			queue_render()
			return
		}

		if (!isNaN(delta)) {
			time += delta
		}

		ctx.imageSmoothingEnabled = false

		const q = quality
		// const q = 1000 / delta < 30 ? Math.floor(quality / 2) : quality

		let rotation = ((time / 1000) * Math.PI * 2) / 10

		const layer_width = img.width / layer_count
		const layer_height = img.height
		const layer_max = Math.max(layer_width, layer_height)

		const height = layer_count * thickness + layer_count * separation
		const base = height / -2 + height * offset

		const scale =
			Math.min(canvas.width / (layer_max * SQRT_2), canvas.height / (height + layer_max * SQRT_2)) *
			zoom

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
			if (shade) {
				const block_ratio = layer_index / (layer_count - 1)
				const bri = lerp(lerp(0.75, 1, block_ratio), 1, Math.min(separation / 10, 1))
				ctx.filter = `brightness(${bri})`
			}

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

		if (fps) {
			ctx.font = "16px 'Fira mono'"
			ctx.fillStyle = 'lightgray'

			ctx.fillText(`${Math.round(1000 / delta)} fps`, 1, 17)
		}

		queue_render()
	}

	function lerp(a: number, b: number, t: number): number {
		return (1 - t) * a + t * b
	}
</script>

<div bind:this={container} bind:clientWidth={container_width} bind:clientHeight={container_height}>
	<canvas bind:this={canvas} {...$$restProps} width={container_width} height={container_height} />
</div>
