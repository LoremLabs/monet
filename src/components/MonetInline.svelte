<script context="module" lang="ts">
	import type { Theme } from "../molecules/InlineNag.svelte";
	export type { Theme };
</script>

<script lang="ts">
	import InlineNag from "../molecules/InlineNag.svelte";
	import "../assets/global.css";

	export let isMonetized = false;
	export let theme: Theme = "light";
</script>

{#if !isMonetized}
	<InlineNag {theme} />
{/if}
