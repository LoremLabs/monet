<script lang="ts">
	import MonetRiser from "../components/MonetRiser/MonetRiser.svelte";
	import * as defaults from "../components/MonetRiser/defaults";
	import HiddenOnScroll from "../utils/HiddenOnScroll.svelte";

	export let href = defaults.href;
	export let ctaText = defaults.ctaText;
	export let ctaTextMobile = defaults.ctaTextMobile;
	export let heading1 = defaults.heading1;
	export let heading2 = defaults.heading2;
	export let text = defaults.text;
</script>

<HiddenOnScroll>
	<MonetRiser {href} {ctaText} {ctaTextMobile} {heading1} {heading2} {text} />
</HiddenOnScroll>
