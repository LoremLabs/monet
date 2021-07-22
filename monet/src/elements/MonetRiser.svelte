<script lang="ts">
	import type { Type } from "../components/MonetRiser/defaults";
	import MonetRiser from "../components/MonetRiser/MonetRiser.svelte";
	import HiddenOnScroll from "../utils/HiddenOnScroll.svelte";

	export let type: Type;
	export let href: string;
	export let ctaText: string;
	export let ctaTextMobile: string;
	export let heading1: string;
	export let heading2: string;
	export let text: string;
</script>

<HiddenOnScroll>
	<MonetRiser
		{type}
		{href}
		{ctaText}
		{ctaTextMobile}
		{heading1}
		{heading2}
		{text}
	/>
</HiddenOnScroll>
