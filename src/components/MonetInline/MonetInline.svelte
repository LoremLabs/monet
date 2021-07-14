<script context="module" lang="ts">
	export type Theme = "light" | "dark" | "dim";
</script>

<script lang="ts">
	import "../../assets/global.css";

	export let heading1 = "The news you need, when you need it!";
	export let heading2 = "Read more with Web Monetization";
	export let subtitle = "";
	export let body =
		"Our journalism is supported by readers like you. Web Monetization saves you from obnoxious ads and enables us to report out the news you need. We call that a win-win.";
	export let ctaText = "Purchase Web Monetization Pass";

	export let theme: Theme = "light";
</script>

<div class="max-w-max">
	<div class="bg-wm-green w-11/12 h-6 rounded-t-3xl" />
	<div
		class="font-sans tracking-tight shadow-xl-all rounded-3xl rounded-tl-none p-8 md:p-14 xl:p-20 {theme ===
		'dark'
			? 'bg-gray-900 text-white'
			: theme === 'dim'
			? 'bg-gray-800 text-white'
			: 'bg-white text-gray-900'}"
	>
		{#if subtitle}
			<p class="uppercase m-0 mb-1 tracking-tighter text-sm">{subtitle}</p>
		{/if}
		<h2
			class="font-extrabold text-2xl xl:text-3xl m-0 mb-1"
			class:text-wm-green={theme === "dim"}
		>
			{#if heading1 && !subtitle}
				<span class="block leading-none">{heading1}</span>
			{/if}
			{#if heading2}
				<span class="block leading-none">{heading2}</span>
			{/if}
		</h2>
		<p
			class="w-full max-w-md text-base sm:text-lg leading-tight sm:leading-7 {theme ===
			'dark'
				? 'text-indigo-200'
				: theme === 'dim'
				? 'text-gray-300'
				: 'text-gray-500'}"
		>
			{body}
		</p>
		<a
			class="inline-block rounded-lg py-2 px-3 md:py-3 md:px-5 leading-tight text-sm sm:text-base no-underline text-white bg-wm-green text-center"
			href="#learn-more">{ctaText}</a
		>
	</div>
</div>
