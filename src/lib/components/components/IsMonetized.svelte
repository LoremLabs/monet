<script>
	import Switch from '$lib/components/components/Switch.svelte';
	import { isMonetizedOptions } from '$lib/components/components/common-options.js';

	export let isMonetized = false;
</script>

<Switch
	bind:checked={isMonetized}
	label={isMonetizedOptions.label}
	name={isMonetizedOptions.name}
/>
<hr />
