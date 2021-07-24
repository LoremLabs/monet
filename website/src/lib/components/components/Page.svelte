<script>
	import Heading from './Heading.svelte';
	import ScriptSnippet from './ScriptSnippet.svelte';
	import MarkupSnippet from './MarkupSnippet.svelte';
	import OptionsHeader from './OptionsHeader.svelte';
	import ResizeableColumns from './ResizeableColumns.svelte';
	import Demo from './Demo.svelte';

	export let name;
	export let options = [];
	export let values = [];
	export let type;

	// Optional
	export let markupComment;
	export let demoStyle;
</script>

<Heading heading={name} />
<ScriptSnippet {name} />
<MarkupSnippet {type} {name} {options} {values} comment={markupComment} />

<form action="#">
	<OptionsHeader storybookPath="/story/{name}" />

	<ResizeableColumns>
		<div slot="left" class="flex flex-col gap-4 pr-4" class:opacity-30={!type}>
			<slot />
		</div>
		<Demo slot="right" {name} {type} {options} {values} style={demoStyle} />
	</ResizeableColumns>
</form>
