<script>
	export let value;
	export let label;
	export let name = 'input_' + (label || '').toLowerCase().replace(/[^a-z]/g, '_');
	export let rows = 1;

	let id = name;
	const classList = `border rounded-md border-gray-200 p-2 focus:border-theme-500 focus:ring-theme-500`;
	const onInput = (e) => (value = e.target.value.replace('\n', ' '));
</script>

<div class="flex flex-col gap-1">
	<label class="font-semibold text-gray-700 text-xl" for={name}>{label}</label>
	{#if rows > 1}
		<textarea class="{classList} resize-none" {name} {id} {rows} {value} on:input={onInput} />
	{:else}
		<input class={classList} type="text" {name} {id} bind:value />
	{/if}
</div>
