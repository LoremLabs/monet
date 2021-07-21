<script lang="ts">
	import type { Theme, Type } from "../components/MonetInline/defaults";
	import MonetInline from "../components/MonetInline/MonetInline.svelte";

	export let type: Type;
	export let theme: Theme;
	export let heading1: string;
	export let heading2: string;
	export let subtitle: string;
	export let body: string;
	export let ctaText: string;
	export let href: string;
</script>

<MonetInline
	{type}
	{theme}
	{heading1}
	{heading2}
	{subtitle}
	{body}
	{ctaText}
	{href}
/>
