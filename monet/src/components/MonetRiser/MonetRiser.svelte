<script lang="ts" context="module">
	import * as defaults from "./defaults";
	export { defaults };
</script>

<script lang="ts">
	import "../../assets/global.css";
	import RiserBase from "./RiserBase.svelte";

	export let type = defaults.type;
	export let href = defaults.href;
	export let ctaText = defaults.ctaText(type);
	export let ctaTextMobile = defaults.ctaTextMobile(type);
	export let heading1 = defaults.heading1;
	export let heading2 = defaults.heading2(type);
	export let text = defaults.text(type);
</script>

<div
	class="fixed bottom-2 left-2 right-2 p-4 w-full m-auto"
	style="max-width: 95vw;"
>
	<RiserBase
		{type}
		{href}
		{ctaText}
		{ctaTextMobile}
		{heading1}
		{heading2}
		{text}
	/>
</div>
