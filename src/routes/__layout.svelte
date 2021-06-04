<script>
	import '$lib/styles/tailwind.css';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Footer from '$lib/components/nav/Footer.svelte';
</script>

<svelte:head>
	<title>Monet: Patterns for Monetization</title>
</svelte:head>

<div class="min-h-screen">
	<div class="relative overflow-hidden">
		<Nav />
		<main class="max-w-7xl mx-auto ">
			<slot />
		</main>
		<Footer />
	</div>
</div>
