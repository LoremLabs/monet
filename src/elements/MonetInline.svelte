<script lang="ts">
	import type { Theme } from "../components/InlineNag.svelte";
	import InlineNag from "../components/InlineNag.svelte";
	import detectMonetization from "../utils/is-monetized";
	import "../assets/global.css";

	const isMonetizedPromise = detectMonetization();

	export let theme: Theme = "light";

</script>

{#await isMonetizedPromise then isMonetized}
	{#if !isMonetized}
		<InlineNag {theme} />
	{/if}
{:catch}
	<!-- nothing -->
{/await}
