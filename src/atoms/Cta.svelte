<script lang="ts">
	import WebMonetizationLogo from "../assets/WebMonetizationLogo.svelte";
	export let direction: "left" | "right" = "left";

	const isLeftAligned = direction === "left";

</script>

<div
	class="inline-flex gap-3 items-center p-6 text-white bg-wm-green"
	class:rounded-l-3xl={isLeftAligned}
	class:rounded-r-3xl={!isLeftAligned}
>
	<span class="h-8 w-8" class:order-1={!isLeftAligned}
		><WebMonetizationLogo /></span
	>
	<span class="font-sans">Purchase from Provider</span>
</div>
