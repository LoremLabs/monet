<script lang="ts" context="module">
	import * as defaults from "./defaults";
	export { defaults };
</script>

<script lang="ts">
	import ModalBase from "./ModalBase.svelte";
	import "../../assets/global.css";

	export let type = defaults.type;
	export let theme = defaults.theme;
	export let variant = defaults.variant;
	export let subtitle = defaults.subtitle;
	export let heading = defaults.heading(type);
	export let href = defaults.href;
	export let ctaText = defaults.ctaText;
	export let text = defaults.text(type);
</script>

<div class="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-modal="true">
	<div
		class="min-h-screen flex justify-center {{
			center: 'items-center',
			bottom: 'items-end',
		}[variant]}"
	>
		<div class="fixed inset-0 bg-gray-500/75 -z-1" />
		<ModalBase
			{type}
			{theme}
			{variant}
			{subtitle}
			{heading}
			{href}
			{ctaText}
			{text}
		/>
	</div>
</div>
