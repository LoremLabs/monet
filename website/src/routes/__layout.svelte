<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import * as Fathom from 'fathom-client';

	import '$lib/styles/fonts.css';
	import '$lib/styles/tailwind.css';
	import '$lib/styles/highlight.css';

	import Nav from '$lib/components/nav/Nav.svelte';
	import Footer from '$lib/components/nav/Footer.svelte';
	import ContentFooter from '$lib/components/components/ContentFooter.svelte';

	onMount(() => {
		// analytics
		Fathom.load('IABNMEHD', {
			includedDomains: ['monet.loremlabs.com'],
			url: 'https://swordfish.lorem.industries/script.js',
		});

		if (!window.monet) {
			console.error('`window.monet` not found.');
			return;
		}

		//
		const capabilities = window.monet.capabilities.acquire();
		capabilities.define('webmonetization/*', () => ({ isSupported: true }));
		capabilities.define('ads/*', () => ({ isSupported: true }));
		capabilities.define('subscription/*', () => ({ isSupported: true }));
		capabilities.unlock(); // don't unlock if you don't want others to change
	});

	// track a page view when the URL path changes
	$: $page.path, browser && Fathom.trackPageview();
</script>

<svelte:head>
	<title>Monet: Paywall Patterns for Monetization</title>
	<meta name="monetization" content="$ilp.uphold.com/fWWxqr4H9rHa" note="mankins payment pointer" />
</svelte:head>

<Nav />
<main class="max-w-7xl mx-auto min-h-screen">
	<slot />
</main>
<Footer />

<ContentFooter>
	<span slot="content">
		<div class="p-1"><monet-pref heading="Set Your Monetization Preferences" /></div>
	</span>
</ContentFooter>
