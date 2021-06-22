<script lang="ts">
	import "../assets/global.css";
	import WebMonetizationLogo from "../atoms/WebMonetizationLogo.svelte";
</script>

<button
	type="button"
	class="border-none bg-transparent p-0 cursor-pointer w-max max-w-md hover:shadow-2xl"
	title="Show details"
	on:click
>
	<span class="block bg-wm-green w-4/5 h-1.5 rounded-t-2xl" />
	<span
		class="inline-flex py-2 rounded-2xl rounded-tl-none bg-gray-900 gap-2 items-center"
	>
		<span class="ml-3 h-8 w-8">
			<WebMonetizationLogo color="text-wm-green" height="h-8" animate />
		</span>
		<span class="h-4 w-4 bg-wm-green rounded-l-md" />
	</span>
</button>
