<script>
	export let hidden = false

	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	function pointerenter() {
		dispatch('hover')
	}
</script>

<div class="container" class:is_hidden={hidden} on:pointerenter={pointerenter} {...$$restProps}>
	<svg viewBox="0 8 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g id="frame" clip-path="url(#clip0_1_3)">
			<ellipse id="hole" cx="12" cy="42" rx="12" ry="6" fill="black" />
			<mask
				id="mask0_1_3"
				style="mask-type:luminance"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="24"
				height="48"
			>
				<path
					id="mask"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24 0H0V42C0 45.3137 5.37258 48 12 48C18.6274 48 24 45.3137 24 42V0Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_1_3)">
				<g id="rabbit">
					<g id="ears">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.5 1C6.11929 1 5 2.11929 5 3.5V48.5C5 49.8807 6.11929 51 7.5 51C8.88071 51 10 49.8807 10 48.5V3.5C10 2.11929 8.88071 1 7.5 1ZM16.5 1C15.1193 1 14 2.11929 14 3.5V48.5C14 49.8807 15.1193 51 16.5 51C17.8807 51 19 49.8807 19 48.5V3.5C19 2.11929 17.8807 1 16.5 1Z"
							fill="#FFAEB6"
						/>
						<path
							d="M6 3.5C6 2.67157 6.67157 2 7.5 2V0C5.567 0 4 1.567 4 3.5H6ZM6 48.5V3.5H4V48.5H6ZM7.5 50C6.67157 50 6 49.3284 6 48.5H4C4 50.433 5.567 52 7.5 52V50ZM9 48.5C9 49.3284 8.32843 50 7.5 50V52C9.433 52 11 50.433 11 48.5H9ZM9 3.5V48.5H11V3.5H9ZM7.5 2C8.32843 2 9 2.67157 9 3.5H11C11 1.567 9.433 0 7.5 0V2ZM15 3.5C15 2.67157 15.6716 2 16.5 2V0C14.567 0 13 1.567 13 3.5H15ZM15 48.5V3.5H13V48.5H15ZM16.5 50C15.6716 50 15 49.3284 15 48.5H13C13 50.433 14.567 52 16.5 52V50ZM18 48.5C18 49.3284 17.3284 50 16.5 50V52C18.433 52 20 50.433 20 48.5H18ZM18 3.5V48.5H20V3.5H18ZM16.5 2C17.3284 2 18 2.67157 18 3.5H20C20 1.567 18.433 0 16.5 0V2Z"
							fill="white"
						/>
					</g>
					<path id="body" d="M20 16H4V48H20V16Z" fill="white" />
					<g id="face">
						<path
							id="base"
							d="M12 24C16.4183 24 20 20.4183 20 16C20 11.5817 16.4183 8 12 8C7.58172 8 4 11.5817 4 16C4 20.4183 7.58172 24 12 24Z"
							fill="white"
						/>
						<path
							id="mouth"
							d="M15 16.5L9 20.5M9 16.5L15 20.5"
							stroke="#302C2E"
							stroke-width="1.5"
						/>
						<path
							id="eyes"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M9 11V15H11V11H9ZM13 11V15H15V11H13Z"
							fill="#302C2E"
						/>
					</g>
				</g>
			</g>
		</g>
		<defs>
			<clipPath id="clip0_1_3">
				<rect width="24" height="48" fill="white" />
			</clipPath>
		</defs>
	</svg>
</div>

<style lang="postcss">
	.container {
		@apply w-12 sm:w-16;
	}

	#rabbit {
		translate: 0 16px;
		transition: translate 400ms 200ms easeOutBack;
	}

	.container.is_hidden #rabbit {
		translate: 0 100%;
		transition: translate 100ms;
	}
</style>
