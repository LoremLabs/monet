<script context="module" lang="ts">
	function toId(id?: string) {
		return String(id).replace("*", "all").replace("/", "--");
	}
	export type Theme = "green" | "red";
</script>

<script lang="ts">
	import DragHandle from "../../atoms/DragHandle.svelte";
	import Checkbox from "../../atoms/Checkbox.svelte";

	export let id: string;
	export let enabled: boolean = false;
	export let title: string;
	export let description: string | undefined;

	/** For Drag-and-drop support */
	export let dragDisabled = true;
</script>

<div
	class="flex gap-2 items-center justify-between border-gray-200 border border-solid rounded-md focus:outline-none focus-within:outline-none focus-within:shadow-md group"
>
	<Checkbox
		id={toId(id)}
		label={title}
		{description}
		bind:checked={enabled}
		class="flex-grow p-2 gap-2"
	/>
	<DragHandle
		class="invisible group-hover:visible group-focus-within:visible"
		{dragDisabled}
		on:mousedown
		on:touchstart
		on:keydown
	/>
</div>
