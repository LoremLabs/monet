<script lang="ts">
	import type { Type, Theme, Variant } from "../components/MonetModal/defaults";
	import MonetModal from "../components/MonetModal/MonetModal.svelte";

	export let type: Type;
	export let theme: Theme;
	export let variant: Variant;
	export let subtitle: string;
	export let heading: string;
	export let href: string;
	export let ctaText: string;
	export let text: string;
</script>

<MonetModal
	{type}
	{theme}
	{variant}
	{subtitle}
	{heading}
	{href}
	{ctaText}
	{text}
/>
