<script>
	export let checked = false;
	export let label;
	export let name = 'switch_' + (label || '').toLowerCase().replace(/[^a-z]/g, '_');
</script>

<div class="flex items-center gap-2 py-1">
	<label class="flex items-center" for={name}>
		<slot name="label"><span class="font-semibold text-gray-700 text-xl">{label}</span></slot>
	</label>
	<button
		on:click={() => (checked = !checked)}
		type="button"
		class="inline-flex flex-shrink-0 mx-1 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-500 {checked
			? 'bg-theme-600'
			: 'bg-gray-200'}"
		role="switch"
		aria-checked={String(checked)}
		id={name}
	>
		<span
			class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition ease-in-out duration-200 {checked
				? 'translate-x-5'
				: 'translate-x-0'}"
		/>
	</button>
</div>
