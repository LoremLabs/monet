<script context="module">
	import { HighlightSvelte as Highlight } from 'svelte-highlight';
	const props = (options, values) => {
		let attrs = [];
		for (let idx = 0; idx < values.length; idx++) {
			const val = values[idx];
			const option = options[idx];
			if (option.default === val) continue;

			const value = option.value(val);
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

	/** @type {unknown[]} */
	export let values = [];
	export let comment = 'Add following before `</body>`';
</script>

<Highlight
	class="my-1 p-4 shadow-2xl rounded-md whitespace-pre-wrap"
	code={`<!-- ${comment} -->\n<${name}${props(options, values)}></${name}>`}
/>
