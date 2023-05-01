<script>
	export let hidden = false
</script>

<div class="rabbit" class:hidden>
	<svg viewBox="0 10 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g id="Frame">
			<ellipse id="hole" cx="17" cy="42" rx="12" ry="6" fill="black" />
			<mask
				id="mask0_1_3"
				style="mask-type:alpha"
				maskUnits="userSpaceOnUse"
				x="5"
				y="0"
				width="24"
				height="48"
			>
				<path
					id="mask"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M29 0H5V42C5 45.3137 10.3726 48 17 48C23.6274 48 29 45.3137 29 42V0Z"
					fill="#D9D9D9"
				/>
			</mask>
			<g mask="url(#mask0_1_3)">
				<g id="rabbit">
					<path
						id="ear_r"
						d="M24 20C24 18.3431 22.8807 17 21.5 17C20.1193 17 19 18.3431 19 20V36C19 37.6569 20.1193 39 21.5 39C22.8807 39 24 37.6569 24 36V20Z"
						fill="#FFAEB6"
						stroke="white"
						stroke-width="2"
					/>
					<path
						id="ear_l"
						d="M15 20C15 18.3431 13.8807 17 12.5 17C11.1193 17 10 18.3431 10 20V36C10 37.6569 11.1193 39 12.5 39C13.8807 39 15 37.6569 15 36V20Z"
						fill="#FFAEB6"
						stroke="white"
						stroke-width="2"
					/>
					<path id="body" d="M25 32H9V64H25V32Z" fill="white" />
					<g id="face">
						<path
							id="base"
							d="M17 40C21.4183 40 25 36.4183 25 32C25 27.5817 21.4183 24 17 24C12.5817 24 9 27.5817 9 32C9 36.4183 12.5817 40 17 40Z"
							fill="white"
						/>
						<g id="mouth">
							<path d="M20 32.5L14 36.5ZM14 32.5L20 36.5Z" fill="#FFAEB6" />
							<path d="M20 32.5L14 36.5M14 32.5L20 36.5" stroke="#302C2E" stroke-width="1.5" />
						</g>
						<g id="eye_l">
							<path d="M15 27V31Z" fill="#FFAEB6" />
							<path d="M15 27V31" stroke="#302C2E" stroke-width="2" />
						</g>
						<g id="eye_r">
							<path d="M19 27V31Z" fill="#FFAEB6" />
							<path d="M19 27V31" stroke="#302C2E" stroke-width="2" />
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
</div>

<style lang="postcss">
	.rabbit {
		width: 128px;
		height: 192px;
	}

	#rabbit {
		transition: translate 400ms easeOutBack;
	}

	.rabbit:hover #rabbit {
		translate: 0 100%;
		transition: translate 100ms;
	}

	#hole {
		cursor: not-allowed;
	}
</style>
