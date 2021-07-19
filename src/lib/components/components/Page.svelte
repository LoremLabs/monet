<script>
	import { isMonetizedOptions } from './common-options.js';

	import Heading from './Heading.svelte';
	import ScriptSnippet from './ScriptSnippet.svelte';
	import MarkupSnippet from './MarkupSnippet.svelte';
	import OptionsHeader from './OptionsHeader.svelte';
	import ResizeableColumns from './ResizeableColumns.svelte';
	import IsMonetized from './IsMonetized.svelte';
	import Demo from './Demo.svelte';

	export let name;
	export let options = [];
	export let values = [];

	// Optional
	export let markupComment;
	export let demoStyle;

	export let isMonetized = false;
</script>

<Heading heading={name} />
<ScriptSnippet {name} />
<MarkupSnippet {name} {options} {values} comment={markupComment} />

<form action="#">
	<OptionsHeader storybookPath="/story/{name}" />

	<ResizeableColumns>
		<div slot="left" class="flex flex-col gap-4 pr-4">
			<IsMonetized bind:isMonetized />
			<slot />
		</div>
		<Demo
			slot="right"
			{name}
			options={[isMonetizedOptions].concat(options)}
			values={[isMonetized].concat(values)}
			style={demoStyle}
		/>
	</ResizeableColumns>
</form>
