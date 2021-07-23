<script context="module">
	const props = (options, values, type) => {
		const attrs = new URLSearchParams();
		attrs.set('type', type || false);
		for (let idx = 0; idx < values.length; idx++) {
			const val = values[idx];
			const option = options[idx];

			const value = typeof option.value === 'function' ? option.value(val) : val || undefined;
			if (value !== undefined) {
				attrs.set(option.prop || option.name, value);
			}
		}
		return attrs.toString();
	};
</script>

<script>
	export let name;
	export let options;
	export let values;
	export let type;

	export let style = '';
</script>

<iframe
	title="Demo: {name}"
	class="border-none ring-4 ring-gray-100 w-full h-full"
	style="min-height: 70vh; min-height: max(600px, 70vh); {style}"
	src="/demo/index.html?component={name}#{props(options, values, type)}"
	frameborder="0"
/>
