<script context="module">
	import Highlight from 'svelte-highlight/src/HighlightSvelte.svelte';

	const isSameAsDefault = (value, option, type) => {
		if (option.default === value) return true;
		if (!type) return false;
		return typeof option.default === 'function' && option.default(type) === value;
	};

	const props = (options, values, type) => {
		let attrs = [];
		for (let idx = 0; idx < values.length; idx++) {
			const val = values[idx];
			const option = options[idx];
			if (isSameAsDefault(val, option, type)) continue;

			const value = typeof option.value === 'function' ? option.value(val) : val || undefined;
			if (value !== undefined) {
				if (typeof value === 'boolean') {
					attrs.push(option.name);
				} else {
					attrs.push(`${option.name}="${value}"`);
				}
			}
		}
		return attrs.length ? ` ${attrs.join(' ')}` : '';
	};
</script>

<script>
	/** @type {{ name: string, default: unknown, value: (val: any) => unknown }[]} */
	export let options = [];
	export let name = '';
	export let type;

	/** @type {unknown[]} */
	export let values = [];
	export let comment = 'Add following before `</body>`';
</script>

<Highlight
	class="my-1 p-4 shadow-2xl rounded-md whitespace-pre-wrap"
	code={`<!-- ${comment} -->\n<${name}${props(options, values, type)}></${name}>`}
/>
