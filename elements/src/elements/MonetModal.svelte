<script lang="ts">
	import MonetModal from "../components/MonetModal/MonetModal.svelte";
	import * as defaults from "../components/MonetModal/defaults";

	export let theme = defaults.theme;
	export let variant = defaults.variant;
	export let subtitle = defaults.subtitle;
	export let heading = defaults.heading;
	export let href = defaults.href;
	export let ctaText = defaults.ctaText;
	export let text = defaults.text;
</script>

<MonetModal {theme} {variant} {subtitle} {heading} {href} {ctaText} {text} />
