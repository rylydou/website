<script lang="ts">
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	const title = getContext('title') as Writable<string>
	title.set('ERR')
</script>

<section class="min-h-screen bg-black text-white grid place-items-center text-center">
	<div class="">
		<h1 class="font-display font-extrabold text-4xl mb-8 bg-white text-black px-6 pt-2 pb-3">
			This page does not exist yet.
		</h1>

		<div class="flex flex-row justify-center items-center gap-4 font-bold text-xl">
			<a
				class="bg-yellow-400 text-black px-4 py-2 hover:underline underline-offset-2"
				style="text-decoration-thickness: 2px;"
				href="/"
			>
				Go back
			</a>

			<span> or </span>

			<a
				class="bg-yellow-400 text-black px-4 py-2 hover:underline underline-offset-2"
				style="text-decoration-thickness: 2px;"
				href="/"
			>
				Go home
			</a>
		</div>
	</div>
</section>
