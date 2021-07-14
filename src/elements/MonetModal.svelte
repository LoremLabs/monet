<script lang="ts">
	import type {
		Theme,
		Variant,
	} from "../components/MonetModal/MonetModal.svelte";
	import MonetModal from "../components/MonetModal/MonetModal.svelte";

	export let theme: Theme = "light";
	export let variant: Variant = "center";
</script>

<MonetModal {theme} {variant} />
