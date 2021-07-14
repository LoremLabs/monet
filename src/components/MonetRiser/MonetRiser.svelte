<script lang="ts">
	import MonetRiser from "./Riser.svelte";
	import "../../assets/global.css";

	export let isMonetized = false;
	export let collapsed = false;
</script>

<MonetRiser {isMonetized} {collapsed} />
