<script context="module" lang="ts">
	import type { Options } from "svelte-dnd-action";

	const flipDurationMs = 150;
	const dndOptions: Partial<Options> = {
		flipDurationMs,
		dropFromOthersDisabled: true,
		dropTargetStyle: {},
	};

	export type Item = {
		id: string | number;
		enabled: boolean;
		title: string;
		description?: string;
	};

	function toId(id?: number | string) {
		return String(id).replace("*", "all").replace("/", "--");
	}
</script>

<script lang="ts">
	import { flip } from "svelte/animate";
	import { createEventDispatcher } from "svelte";
	import { dndzone, SOURCES, TRIGGERS } from "svelte-dnd-action";
	import PrefPanelColumnItem from "./PrefPanelColumnItem.svelte";

	export let items: Item[] = [];
	const dispatch = createEventDispatcher();

	let dragDisabled = true;
	let currentlyDraggedId: string | null;
	function handleDndConsider(ev: CustomEvent<DndEvent>) {
		const { source, trigger, id } = ev.detail.info;
		items = ev.detail.items as Item[];
		// Ensure dragging is stopped on drag finish via keyboard
		if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
			dragDisabled = true;
			currentlyDraggedId = null;
		} else {
			currentlyDraggedId = id;
		}
	}

	function handleDndFinalize(ev: CustomEvent<DndEvent>) {
		const { source } = ev.detail.info;
		items = ev.detail.items as Item[];
		dispatch("change", { type: "reorder" });
		// Ensure dragging is stopped on drag finish via pointer (mouse, touch)
		if (source === SOURCES.POINTER) {
			dragDisabled = true;
			currentlyDraggedId = null;
		}
	}

	function startDrag(ev: MouseEvent | TouchEvent) {
		ev.preventDefault();
		dragDisabled = false;
	}

	function handleKeyDown(ev: KeyboardEvent) {
		if (!dragDisabled) return;
		if (ev.key === "Enter" || ev.key === " ") {
			dragDisabled = false;
		}
	}
</script>

<div
	class="w-full flex flex-col gap-2 p-2 rounded-lg font-sans"
	use:dndzone={{ items, dragDisabled, ...dndOptions }}
	on:consider={handleDndConsider}
	on:finalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div
			class="focus:outline-none bg-white"
			class:opacity-60={!dragDisabled && currentlyDraggedId !== item.id}
			animate:flip={{ duration: flipDurationMs }}
		>
			<PrefPanelColumnItem
				id={toId(item.id)}
				title={item.title}
				description={item.description}
				bind:enabled={item.enabled}
				on:change={(ev) => {
					dispatch("change", {
						// @ts-expect-error
						type: ev.target.checked ? "allow" : "deny",
						name: item.id,
					});
				}}
				{dragDisabled}
				on:mousedown={startDrag}
				on:touchstart={startDrag}
				on:keydown={handleKeyDown}
			/>
		</div>
	{/each}
</div>
