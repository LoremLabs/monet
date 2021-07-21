<script context="module">
	const DIVIDER_WIDTH = 12;
	import throttle from 'lodash.throttle';
</script>

<script>
	import { onMount } from 'svelte';

	/** @type [leftColWidth: string, rightColWidth: string] */
	export let columns = ['1fr', '1fr'];

	let gridTemplateColumns = `${columns[0]} ${DIVIDER_WIDTH}px ${columns[1]}`;

	/** @type {HTMLElement} */
	let container;
	let isDragging = false;
	function onDrag(event) {
		const leftColWidth = isDragging
			? event.clientX - container.offsetLeft
			: container.firstElementChild.clientWidth;
		const widths = [
			leftColWidth,
			DIVIDER_WIDTH,
			container.clientWidth - DIVIDER_WIDTH - leftColWidth,
		];
		container.style.gridTemplateColumns = widths.map((c) => `${c}px`).join(' ');
	}
	const onDragThrottled = throttle(onDrag, 30);

	onMount(() => onDrag());
</script>

<svelte:window on:resize={() => (container.style.gridTemplateColumns = gridTemplateColumns)} />

<div
	class="md:grid"
	style="grid-template-columns: {gridTemplateColumns};"
	bind:this={container}
	on:pointerup={() => (isDragging = false)}
	on:pointermove={isDragging && onDragThrottled}
>
	<div class="overflow-auto"><slot name="left" /></div>

	<button
		type="button"
		aria-hidden="true"
		class="invisible pointer-events-none md:visible md:pointer-events-auto md:flex items-center bg-gray-100 text-gray-700 relative cursor-[ew-resize] focus:outline-none focus:bg-gray-200"
		on:pointerdown={() => (isDragging = true)}
	>
		<div class="absolute inset-y-0 -inset-x-2" />
		<svg
			aria-hidden="true"
			class="h-4 w-4 pointer-events-none"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M8 5h2v14H8zM14 5h2v14h-2z" />
		</svg>
	</button>

	<div class="overflow-auto" class:pointer-events-none={isDragging}><slot name="right" /></div>
</div>
