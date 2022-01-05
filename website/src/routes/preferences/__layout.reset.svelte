<script>
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import * as Fathom from 'fathom-client';

	import '$lib/styles/fonts.css';
	import '$lib/styles/tailwind.css';
	import '$lib/styles/highlight.css';

	import Nav from '$lib/components/nav/Nav.svelte';
	// import Footer from '$lib/components/nav/Footer.svelte';
	import ContentFooter from '$lib/components/components/ContentFooter.svelte';

	// track a page view when the URL path changes
	$: $page.path, browser && Fathom.trackPageview();
</script>

<svelte:head>
	<title>Monet Monetization Patterns: Demo</title>
</svelte:head>

<Nav />
<main class="max-w-7xl mx-auto min-h-screen">
	<slot />
</main>
<ContentFooter>
	<span slot="content">
		<div class="p-4 lg:p-8"><monet-pref heading="Set Your Monetization Preferences" /></div>
	</span>
</ContentFooter>
