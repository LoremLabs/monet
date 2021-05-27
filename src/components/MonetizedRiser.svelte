<script lang="ts">
	import { onMount } from "svelte";

	import { fade, fly } from "../utils/transfix";
	import "../assets/global.css";
	import WebMonetizationLogo from "../atoms/WebMonetizationLogo.svelte";
	import BasicToast from "./BasicToast.svelte";
	import CloseIcon from "../assets/icons/close.svelte";

	export let text = "This site is web-monetized.";
	export let collapsed = false;

	let ready = false;

	function toggleCollapse() {
		collapsed = !collapsed;
	}

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
		<button
			transition:fade={{ duration: 300 }}
			type="button"
			class="border-none p-0 cursor-pointer w-max max-w-md hover:shadow-2xl"
			on:click={toggleCollapse}
			title="Show details"
		>
			<span class="block bg-wm-green w-4/5 h-1.5 rounded-t-2xl" />
			<span
				class="inline-flex py-2 rounded-2xl rounded-tl-none bg-gray-900 gap-2 items-center"
			>
				<span class="ml-3 h-8 w-8">
					<WebMonetizationLogo class="text-wm-green" />
				</span>
				<span class="h-4 w-4 bg-wm-green rounded-l-md" />
			</span>
		</button>
	{/if}
{/if}
