<script>
	import { onMount } from 'svelte';

	export let path;

	let elem;
	onMount(() => {
		elem.href = elem.dataset.href;
	});
</script>

<!-- We want to use a `<a href="">` here, but bugs!
	https://github.com/sveltejs/kit/pull/1679 -->

<a
	class="inline-flex gap-1 bg-pink-50 hover:bg-pink-100 focus:bg-pink-100 focus:ring-1 focus:outline-none focus:ring-pink-500 text-pink-700 p-2 rounded-md border-none"
	bind:this={elem}
	rel="external"
	href="#{path}"
	data-href="/storybook/?path={path}"
	><img class="w-6 h-6" src="/storybook.ico" alt="" /> View on Storybook</a
>
