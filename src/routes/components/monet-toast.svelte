<script context="module">
	const name = 'monet-toast';
	const options = [];
</script>

<script>
	import Page from '$lib/components/components/Page.svelte';
	$: values = [];
</script>

<Page {name} {options} {values} isMonetized={true} demoStyle="min-height: 300px;">
	<!-- No options -->
</Page>
