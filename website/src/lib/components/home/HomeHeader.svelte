<script context="module">
	const title = 'Open Source Design Components for Gated Content';
	const body = `Web monetization empowers creators, journalists and artists with new revenue possibilities. These responsive, customizable components can be easily added to your site. Explore our growing, collaborative collection of design components for gating content on the web.`;
</script>

<header
	class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden rounded-tl-3xl rounded-tr-3xl"
>
	<div class="mx-auto max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8">
		<div
			class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:py-24"
		>
			<h1
				class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
			>
				{title}
			</h1>
			<p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
				{body}
			</p>
			<div class="mt-10 sm:mt-12 sm:max-w-xl sm:mx-auto lg:mx-0 flex flex-wrap gap-1 sm:gap-3">
				<pre
					class="flex-1 p-3 bg-theme-50 rounded-md border-0 text-base text-theme-800">npm install monet</pre>
				<a
					href="#try"
					class="block p-3 rounded-md shadow bg-theme-500 text-white font-medium hover:bg-theme-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-300 focus:ring-offset-gray-900"
					>Try it out</a
				>
			</div>
		</div>
		<div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
			<div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
				<img
					class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
					src="/svg/home.svg"
					alt=""
				/>
			</div>
		</div>
	</div>
</header>
