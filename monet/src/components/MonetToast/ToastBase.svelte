<script lang="ts">
	import type { Type } from "../../utils/constants";
	import { onMount } from "svelte";
	import { fly } from "../../utils/transfix";

	import ToastExpanded from "./ToastExpanded.svelte";
	import ToastCollapsed from "./ToastCollapsed.svelte";

	export let type: Type;
	export let text: string;
	export let collapsed = false;

	function toggleCollapse() {
		collapsed = !collapsed;
	}

	let ready = false;
	onMount(() => {
		// needed to have a transition
		ready = true;
	});
</script>

{#if ready}
	{#if !collapsed}
		<div in:fly={{ y: 200, duration: 200 }}>
			<ToastExpanded {type} {text} on:click={toggleCollapse} />
		</div>
	{:else}
		<div in:fly={{ y: -60, duration: 200 }}>
			<ToastCollapsed {type} on:click={toggleCollapse} />
		</div>
	{/if}
{/if}
