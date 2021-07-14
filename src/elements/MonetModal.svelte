<script lang="ts">
	import type {
		Theme,
		Variant,
	} from "../components/MonetModal/MonetModal.svelte";
	import MonetModal from "../components/MonetModal/MonetModal.svelte";
	import detectMonetization from "../utils/is-monetized";

	const isMonetizedPromise = detectMonetization();

	export let theme: Theme = "light";
	export let variant: Variant = "center";
</script>

{#await isMonetizedPromise then isMonetized}
	{#if !isMonetized}
		<MonetModal {theme} {variant} />
	{/if}
{:catch}
	<!-- nothing -->
{/await}
