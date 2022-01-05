<script>
	import { fly } from 'svelte/transition';

	import Visibility from '$lib/components/components/Visibility.svelte';

	export let open = false;
</script>

<div class="py-12">
<Visibility
	threshold={10}
	steps={100}
	inView={() => {
		open = true;
	}}
	outView={() => {
		open = false;
	}}
>
	<footer
		class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
	>
		{#if open}
			<div class="fixed left-0 bottom-0 w-full" transition:fly={{ duration: 500, y: 500 }}>
				<div class="w-full py-0.5 bg-gray-500">
					<div class="max-w-7xl mx-auto py-0.5">
						<div class="p-2 md:p-6">
							<slot name="content" />
						</div>
					</div>
				</div>
				<slot name="header" />
			</div>
		{:else}
			<div class="fixed inset-x-0 bottom-0 h-1 bg-secondary-500" />
		{/if}
	</footer>
</Visibility>
</div>