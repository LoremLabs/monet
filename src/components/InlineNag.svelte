<script lang="ts">
	export let heading1 = "Ready to dive in?";
	export let heading2 = "Start your free trial today.";
	export let body =
		"Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.";
	export let ctaText = "Purchase Web Monetization Pass";

	export let variant: "light" | "dark" = "light";

</script>

<div class="max-w-max">
	<div class="bg-wm-green w-11/12 h-6 rounded-t-3xl" />
	<div
		class="font-sans tracking-tight shadow-xl-all rounded-3xl rounded-tl-none p-8 md:p-14 xl:p-20 {variant ===
		'dark'
			? 'bg-gray-900 text-white'
			: 'bg-white text-gray-900'}"
	>
		<h2 class="font-extrabold text-2xl xl:text-3xl m-0 mb-1">
			<span class="block leading-none">{heading1}</span>
			<span class="block leading-none">{heading2}</span>
		</h2>
		<p
			class="w-full max-w-md text-base sm:text-lg leading-tight sm:leading-tight {variant ===
			'dark'
				? 'text-indigo-200'
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
