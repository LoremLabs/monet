<script>
	import { onMount } from 'svelte';
	import '$lib/styles/fonts.css';
	import '$lib/styles/tailwind.css';
	import '$lib/styles/highlight.css';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Footer from '$lib/components/nav/Footer.svelte';

	onMount(() => {
		if (!window.monet) {
			console.error('`window.monet` not found.');
			return;
		}
		const capabilities = window.monet.capabilities.acquire();
		capabilities.define('webmonetization/*', () => ({ isSupported: true }));
		capabilities.define('ads/*', () => ({ isSupported: true }));
		capabilities.define('subscription/*', () => ({ isSupported: true }));
		capabilities.unlock();
	});
</script>

<svelte:head>
	<title>Monet: Patterns for Monetization</title>
</svelte:head>

<Nav />
<main class="max-w-7xl mx-auto ">
	<slot />
</main>
<div class="p-4 lg:p-8"><monet-pref /></div>
<Footer />
