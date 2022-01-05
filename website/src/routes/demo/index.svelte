<script>
	import { onMount } from 'svelte';
	let userMatches = [];
	let userPrefs = { allows: [], denies: [''] };
	let siteMethods = [];

	onMount(() => {
		if (!window.monet) {
			console.error('`window.monet` not found.');
			return;
		}

		//
		const capabilities = window.monet.capabilities.acquire();
		//		capabilities.use(webMonetization({ timeout: 5000 }));
		capabilities.define('webmonetization/*', () => ({ isSupported: true }));
		capabilities.define('ads/*', () => ({ isSupported: true }));
		capabilities.define('subscription/*', () => ({ isSupported: true }));
		capabilities.unlock(); // don't unlock if you don't want others to change

		window.monet.userPreferences.addEventListener('change', (ev) => {
			console.log(`userPreferences:change===============`, ev.changeType, ev.capability);
		});
		window.monet.capabilities.addEventListener('change', (ev) => {
			console.log(`capabilities:change--------------`, ev.changeType, ev.capability);
		});

		window.monet.userPreferences.deny('ads/behavioral');
		window.monet.userPreferences.allow('ads/*');
		window.monet.userPreferences.allow('foo/*');
		window.monet.userPreferences.allow('webmonetization/*');

		console.group('monet.capabilities.list()');
		console.log(window.monet.capabilities.list());
		console.groupEnd();
		siteMethods = window.monet.capabilities.list();
		console.group('monet.userPreferences.get()');
		console.dir(window.monet.userPreferences.get());
		console.groupEnd();
		userPrefs = window.monet.userPreferences.get();
		window.monet.match().then((matches) => {
			console.group('monet.match()');
			console.table(matches);
			console.groupEnd();
			userMatches = matches;
		});

		// (async () => {
		// 	console.log(await monet.detect("webmonetization/*"));
		// })();
	});
</script>

<div class="p-2">
	<div class="h-4 md:h-6 bg-yellow-600 rounded-t-2xl w-11/12" />
	<section class="bg-white rounded-tr-2xl p-4 md:p-8">
		<h2
			class="mt-2 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
		>
			Site Capabilities
		</h2>
		<ul>
			{#each siteMethods as pref}
				<li>{pref}</li>
			{/each}
		</ul>

		<h2
			class="mt-2 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
		>
			User Preferences
		</h2>

		<h3
			class="mt-2 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
		>
			Allows
		</h3>

		<ul>
			{#each userPrefs.allows as pref}
				<li>{pref}</li>
			{/each}
		</ul>

		<h3
			class="mt-2 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
		>
			Denies
		</h3>
		<ul>
			{#each userPrefs.denies as pref}
				<li>{pref}</li>
			{/each}
		</ul>

		<h2
			class="mt-2 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
		>
			Matches
		</h2>
		<ul>
			{#each userMatches as match}
				<li>{match.capability}</li>
			{/each}
		</ul>
	</section>
</div>
