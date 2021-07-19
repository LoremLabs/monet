<script lang="ts" context="module">
	import type { Type } from "./../../utils/constants";
</script>

<script lang="ts">
	import Logo from "../../atoms/Logo.svelte";

	export let type: Type;

	const textColor = {
		ad: "text-red-700",
		sub: "text-wm-green",
		webmon: "text-wm-green",
	};
	const bgColor = {
		ad: "bg-red-700",
		sub: "bg-wm-green",
		webmon: "bg-wm-green",
	};
</script>

<button
	type="button"
	class="border-none bg-transparent p-0 cursor-pointer w-max max-w-md hover:shadow-2xl"
	title="Show details"
	on:click
>
	<span class="block {bgColor[type]} w-4/5 h-1.5 rounded-t-2xl" />
	<span
		class="inline-flex py-2 rounded-2xl rounded-tl-none bg-gray-900 gap-2 items-center"
	>
		<span class="ml-3 h-8 w-8 {textColor[type]}">
			<Logo {type} />
		</span>
		<span class="h-4 w-4 {bgColor[type]} rounded-l-md" />
	</span>
</button>
