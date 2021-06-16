<script>
	import StorybookLink from '$lib/components/components/StorybookLink.svelte';
	export let storybookPath;
</script>

<div class="flex items-center justify-between gap-4 py-4 mt-4">
	<h2 class="font-extrabold text-2xl md:text-4xl">Options</h2>
	<StorybookLink path={storybookPath} />
</div>
