<script context="module">
	import { HighlightSvelte as Highlight } from 'svelte-highlight';
	const joinLines = (...strs) => strs.join('\n');

	const SOURCE_PREFIX = {
		jsDelivr: 'https://cdn.jsdelivr.net/npm/monet/',
		unpkg: 'https://unpkg.com/monet/',
	};
</script>

<script>
	import RadioGroup from '$lib/components/components/RadioGroup.svelte';

	function props(...attrs) {
		return attrs.filter(Boolean).join(' ');
	}

	let source = 'unpkg';
	let theme = 'light';
	$: attrs = props(theme && theme !== 'light' && `theme="${theme}"`);
</script>

<div class="p-2">
	<div class="h-4 md:h-6 bg-theme-600 rounded-t-2xl w-11/12" />
	<section class="bg-white rounded-tr-2xl p-4 md:p-8">
		<h1 class="font-extrabold text-4xl md:text-5xl lg:text-6xl py-4 mb-2">monet-inline</h1>

		<Highlight
			class="my-1 p-4 shadow-2xl rounded-md whitespace-pre-wrap"
			code={joinLines(
				`<!-- Add following before </head> -->`,
				`<script src="${SOURCE_PREFIX[source]}monet-inline.js" defer><\/script>`,
			)}
		/>
		<Highlight
			class="my-1 p-4 shadow-2xl rounded-md whitespace-pre-wrap"
			code={joinLines(
				'<!-- Add following within `<body></body>` where you want the prompt to appear -->',
				`<monet-inline${attrs ? ` ${attrs}` : ''}></monet-inline>`,
			)}
		/>

		<form action="#">
			<h2 class="font-extrabold text-2xl md:text-4xl py-4 mt-4">Options</h2>
			<RadioGroup
				bind:selected={theme}
				legend="Theme"
				name="theme"
				options={[
					['light', 'Light'],
					['dark', 'Dark'],
					['dim', 'Dark (dim)'],
				]}
			/>
			<hr class="h-0.5 bg-gray-50 border-none my-8" />
			<RadioGroup
				bind:selected={source}
				legend="Source"
				name="source"
				options={[
					['unpkg', 'unpkg'],
					['jsDelivr', 'jsDelivr'],
				]}
			/>
		</form>
	</section>
</div>
