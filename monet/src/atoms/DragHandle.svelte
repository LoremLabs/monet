<script lang="ts">
	import DragIcon from "../assets/icons/drag.svelte";

	export let dragDisabled = true;
</script>

<div
	tabindex={dragDisabled ? 0 : -1}
	aria-label="Drag to re-order"
	on:mousedown
	on:touchstart
	on:keydown
	class="h-full w-6 border-none bg-transparent p-1 text-gray-400 hover:text-gray-800 focus:outline-none {dragDisabled
		? 'cursor-move'
		: 'cursor-[grabbing]'} {$$props.class}"
>
	<DragIcon />
</div>
