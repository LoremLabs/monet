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
	<div class="bg-wm-green w-95 h-6 rounded-t-3xl" />
	<div
		class="grid grid-cols-2 gap-2 justify-between p-4 shadow-xl-all rounded-3xl rounded-tl-none"
	>
		<div class="pr-4">
			<h2
				class="mt-1 font-extrabold text-gray-900 text-3xl sm:text-4xl sm:tracking-tight lg:text-5xl"
			>
				{heading}
			</h2>
		</div>
		<PrefPanelColumn bind:items={options} on:change />
	</div>
</div>
