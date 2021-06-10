<script lang="ts">
	import type { Theme, Variant } from "../components/MonetModal.svelte";
	import MonetModal from "../components/MonetModal.svelte";
	import detectMonetization from "../utils/is-monetized";

	const isMonetizedPromise = detectMonetization();

	export let theme: Theme = "light";
	export let variant: Variant = "center";

</script>

{#await isMonetizedPromise then isMonetized}
	<MonetModal {isMonetized} {theme} {variant} />
{:catch}
	<!-- nothing -->
{/await}
