<script lang="ts">
	import { onMount } from "svelte";
	import { fade, fly } from "../utils/transfix";
	import "../assets/global.css";

	import BasicToast from "./BasicToast.svelte";
	import SmallToast from "./SmallToast.svelte";

	export let text = "This site is web-monetized.";
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
		<div in:fly={{ x: -500, duration: 300 }} out:fade={{ duration: 300 }}>
			<BasicToast {text} on:click={toggleCollapse} />
		</div>
	{:else}
		<div transition:fade={{ duration: 300 }}>
			<SmallToast on:click={toggleCollapse} />
		</div>
	{/if}
{/if}
