<script context="module">
	const markupComment = 'Add following within `<body></body>` where you want the prompt to appear';

	const themeOptions = {
		name: 'theme',
		default: 'light',
		options: [
			['light', 'Light'],
			['dark', 'Dark'],
			['dim', 'Dark (dim)'],
		],
		value(val) {
			if (!val) return undefined;
			return val;
		},
	};

	const name = 'monet-inline';
	const options = [themeOptions];
</script>

<script>
	import Page from '$lib/components/components/Page.svelte';
	import RadioGroup from '$lib/components/components/RadioGroup.svelte';

	let theme = themeOptions.default;
	$: values = [theme];
</script>

<Page {name} {options} {values} {markupComment}>
	<RadioGroup bind:selected={theme} legend="Theme" name="theme" options={themeOptions.options} />
</Page>
