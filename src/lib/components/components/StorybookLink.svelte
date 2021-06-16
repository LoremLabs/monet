<script>
	export let path;
</script>

<!-- We want to use a `<a>` here, but bugs!
	https://github.com/sveltejs/kit/pull/1679 -->

<button
	class="inline-flex gap-1 bg-pink-50 hover:bg-pink-100 focus:bg-pink-100 focus:ring-1 focus:outline-none focus:ring-pink-500 text-pink-700 p-2 rounded-md border-none"
	type="button"
	on:click={() => {
		window.location.href = `/storybook/?path=${path}`;
		return false;
	}}><img class="w-6 h-6" src="/storybook.ico" alt="" /> View on Storybook</button
>
