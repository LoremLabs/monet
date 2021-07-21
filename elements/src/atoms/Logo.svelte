<script lang="ts">
	import type { Type } from "./../utils/constants";
	import WebMonetizationLogo from "./WebMonetizationLogo.svelte";

	export let type: Type;
</script>

{#if type === "ad"}
	<WebMonetizationLogo animate />
{:else if type === "sub"}
	<WebMonetizationLogo />
{:else if type === "webmon"}
	<WebMonetizationLogo />
{/if}
