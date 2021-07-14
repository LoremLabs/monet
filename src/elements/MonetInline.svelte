<script lang="ts">
	import type { Theme } from "../components/MonetInline/MonetInline.svelte";
	import MonetInline from "../components/MonetInline/MonetInline.svelte";

	export let theme: Theme = "light";
</script>

<MonetInline {theme} />
