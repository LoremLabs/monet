<script lang="ts">
	import type { Theme } from "../components/MonetInline/MonetInline.svelte";
	import MonetInline from "../components/MonetInline/MonetInline.svelte";
	import detectMonetization from "../utils/is-monetized";

	const isMonetizedPromise = detectMonetization();

	export let theme: Theme = "light";
</script>

{#await isMonetizedPromise then isMonetized}
	{#if !isMonetized}
		<MonetInline {theme} />
	{/if}
{:catch}
	<!-- nothing -->
{/await}
