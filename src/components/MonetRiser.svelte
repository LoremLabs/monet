<script lang="ts">
	import AnonRiser from "../components/AnonRiser.svelte";
	import MonetizedRiser from "../components/MonetizedRiser.svelte";

	export let isMonetized = false;

</script>

{#if isMonetized}
	<div class="fixed bottom-2 left-2 p-2">
		<MonetizedRiser />
	</div>
{:else}
	<div
		class="fixed bottom-2 left-2 right-2 p-4 w-full m-auto"
		style="max-width: 95vw;"
	>
		<AnonRiser />
	</div>
{/if}
