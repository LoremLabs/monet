<script context="module">
	const name = 'monet-riser';
	const options = [];
</script>

<script>
	import Page from '$lib/components/components/Page.svelte';
	$: values = [];
</script>

<Page {name} {options} {values} demoStyle="min-height: 400px;">
	<!-- No options -->
</Page>
