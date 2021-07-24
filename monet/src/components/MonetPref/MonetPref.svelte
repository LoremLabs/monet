<script context="module" lang="ts">
	import type { Item } from "./PrefPanelColumn.svelte";
	export type Options = Item[];
</script>

<script lang="ts">
	import "../../assets/global.css";
	import PrefPanelColumn from "./PrefPanelColumn.svelte";

	export let heading = "Your Monetization Preferences";
	export let options: Options = [];
</script>

<div class="font-sans">
	<div class="bg-gray-900 w-95 h-6 rounded-t-3xl" />
	<div
		class="bg-white grid grid-cols-1 justify-between p-4 shadow-xl-all rounded-3xl rounded-tl-none"
	>
		<div class="pl-4 pr-4 sm:pl-8 sm:pr-8 pb-12">
			<h2
				class="mt-1 pt-4 pl-2 font-extrabold text-gray-900 text-2xl sm:tracking-tight lg:text-5xl"
			>
				{heading}
			</h2>
			<PrefPanelColumn bind:items={options} on:change />
		</div>
	</div>
</div>
