<script lang="ts">
	import type { Theme } from "../components/MonetInline.svelte";
	import MonetInline from "../components/MonetInline.svelte";
	import detectMonetization from "../utils/is-monetized";

	const isMonetizedPromise = detectMonetization();

	export let theme: Theme = "light";

</script>

{#await isMonetizedPromise then isMonetized}
	<MonetInline {isMonetized} {theme} />
{:catch}
	<!-- nothing -->
{/await}
