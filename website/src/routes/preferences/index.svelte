<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import webMonetization from '@loremlabs/monetization-capability-api/build/legacy/plugins/webmonetization.js';

	let userMatches = [];
	let userPrefs = { allows: [], denies: [''] };
	let siteMethods = [];
	let acceptHeader = '';

	onMount(() => {
		if (!browser) return;

		if (!window.monet) {
			console.error('`window.monet` not found.');
			return;
		}

		// store user's monetization preferences
		const cachedPrefs = window.localStorage.getItem('monetization-prefs');
		if (cachedPrefs) {
			const initialPrefs = JSON.parse(cachedPrefs);
			if (initialPrefs.allows) {
				initialPrefs.allows.forEach((allow) => {
					window.monet.userPreferences.allow(allow);
				});
			}
			if (initialPrefs.denies) {
				initialPrefs.denies.forEach((deny) => {
					window.monet.userPreferences.deny(deny);
				});
			}
		} else {
			// default user preferences
			window.monet.userPreferences.deny('ads/behavioral');
			window.monet.userPreferences.allow('ads/*');
			window.monet.userPreferences.allow('subscriptions/*'); // doesn't say that user has a subscription, just that it's possible
			window.monet.userPreferences.deny('webmonetization/*'); //
		}

		const updateUserPrefs = () => {
			// report updated preferences, persist
			userPrefs = window.monet.userPreferences.get();
			siteMethods = window.monet.capabilities.list();
			window.monet.match().then((matches) => {
				console.group('monet.match()');
				console.table(matches);
				console.groupEnd();
				userMatches = matches;

				acceptHeader = userPrefs.toAcceptHeader();
			});

			console.group('monet.capabilities.list()');
			console.log(window.monet.capabilities.list());
			console.groupEnd();

			console.group('monet.userPreferences.get()');
			console.dir(window.monet.userPreferences.get());
			console.groupEnd();

			window.localStorage.setItem('monetization-prefs', JSON.stringify(userPrefs));

			console.log({ userPrefs, siteMethods, acceptHeader });
		};

		// these are the site's capabilities
		const capabilities = window.monet.capabilities.acquire();
		capabilities.use(webMonetization({ timeout: 5000 }));
		capabilities.define('ads/*', () => ({ isSupported: true }));
		capabilities.define('subscription/*', () => ({ isSupported: true }));
		capabilities.define('pass/*', () => ({ isSupported: true }));
		capabilities.unlock(); // don't unlock if you don't want others to change

		// setup event listeners to respond to changes
		window.monet.userPreferences.addEventListener('change', (ev) => {
			console.log(`userPreferences:change 👋`, ev.changeType);
			updateUserPrefs();
		});
		window.monet.capabilities.addEventListener('change', (ev) => {
			console.log(`👋 capabilities:change`, ev.changeType, ev.capability);
			userPrefs = window.monet.userPreferences.get();
			updateUserPrefs();
		});

		// probe for webmonetization support, added via plugin
		(async () => {
			const browserSupportsWebmon = await window.monet.detect('webmonetization/*', {
				timeout: 3000,
			});
			if (browserSupportsWebmon.isSupported) {
				console.log('🎉 browser supports webmonetization');
				window.monet.userPreferences.allow('webmonetization/*');
			} else {
				console.log('🚫 browser does not support webmonetization');
				window.monet.userPreferences.deny('webmonetization/*');
			}

			updateUserPrefs();
		})();

		updateUserPrefs();
	});
</script>

<div class="p-2 mb-48">
	<div class="h-4 md:h-6 bg-yellow-600 rounded-t-2xl w-11/12" />

	<section class="bg-white rounded-tr-2xl p-4 md:p-8">
		<h2
			class="mt-2 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl"
		>
			Accept-Monetization Header
		</h2>
		<ul class="pl-4 font-mono">
			<li class="text-gray-500">Accept-Monetization: "{acceptHeader}"</li>
		</ul>

		<h2
			class="mt-2 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl"
		>
			Preferred Monetization
		</h2>
		<ul class="pl-4 font-mono">
			{#each userMatches as match}
				<li>{match.capability}</li>
			{/each}
		</ul>

		<h2
			class="mt-2 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl"
		>
			Site Capabilities
		</h2>
		<ul class="pl-4 font-mono">
			{#each siteMethods as pref}
				<li>{pref}</li>
			{/each}
		</ul>

		<h2
			class="mt-2 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl"
		>
			User Preferences
		</h2>

		<div class="pl-8">
			<h3
				class="mt-2 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl"
			>
				Allows
			</h3>

			<ul class="pl-4 font-mono">
				{#each userPrefs.allows as pref}
					<li>{pref}</li>
				{/each}
			</ul>

			<h3
				class="mt-2 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl"
			>
				Denies
			</h3>
			<ul class="pl-4 font-mono">
				{#each userPrefs.denies as pref}
					<li>{pref}</li>
				{/each}
			</ul>
		</div>
	</section>

	<section class="bg-gray-300 p-4 mt-8 md:p-8">
		<h1
			class="mt-2 text-2xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl"
		>
			Content Example
		</h1>
		<ul class="pl-4 font-mono">
			<monet-if supports="webmonetization/*" interval="3000">
				<li class="text-gray-500">Web Monetization</li>
				<div slot="else">
					<li class="text-gray-500 line-through">Web Monetization</li>
				</div>
			</monet-if>
			<monet-if supports="ads/simple" interval="100">
				<li class="text-gray-500">Ads</li>
				<div slot="else">
					<li class="text-gray-500 line-through">Ads</li>
				</div>
			</monet-if>
			<monet-if supports={siteMethods.join(' ')} interval="3000">
				<li class="text-gray-500">Anything</li>
				<span slot="else"></span>
			</monet-if>
		</ul>
		<monet-if supports={siteMethods.join(' ')} interval="3000">
			<p>You're monetizing this site, thank you.</p>
			<monet-inline slot="else" heading1="Consider going premium?" heading2="Buy a pass" subtitle="No Monetization Method Found" body="This would tell the user about the various options." cta="Learn More" link="/"></monet-inline>
		</monet-if>

	</section>
</div>
