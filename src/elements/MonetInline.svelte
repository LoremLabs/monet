<script lang="ts">
	import MonetInline from "../components/MonetInline/MonetInline.svelte";
	import * as defaults from "../components/MonetInline/defaults";

	export let theme = defaults.theme;
	export let heading1 = defaults.heading1;
	export let heading2 = defaults.heading2;
	export let subtitle = defaults.subtitle;
	export let body = defaults.body;
	export let ctaText = defaults.ctaText;
	export let href = defaults.href;
</script>

<MonetInline {theme} {heading1} {heading2} {subtitle} {body} {ctaText} {href} />
