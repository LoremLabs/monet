<script>
	import { HighlightSvelte as Highlight } from 'svelte-highlight';

	export let codeInline = `<script src="https://monet.loremlabs.com/dist/monet-inline.js" defer><\/script>\n<monet-inline theme="light"></monet-inline>`;
	export let codeRiser = `<script src="https://monet.loremlabs.com/dist/monet-riser.js" defer><\/script>\n<monet-riser></monet-riser>`;
	export let codeModal = `<script src="https://monet.loremlabs.com/dist/monet-modal.js" defer><\/script>\n<monet-modal variant="center"></monet-modal>`;
</script>

<section
	class="py-5 md:py-10 lg:py-20 px-4 md:px-10 bg-no-repeat bg-contain bg-left-top"
	style="background-image: url(/svg/gradient-odd.svg);"
>
	<header class="md:p-5">
		<h2 class="font-extrabold text-4xl">Inline Monetizer</h2>
		<p class="text-lg">This design component prompts users while reading an article,</p>
	</header>
	<div class="flex flex-col lg:flex-row gap-2 lg:items-center py-5 md:py-10 lg:py-20">
		<img class="filter drop-shadow-2xl lg:w-2/3" src="/inline.png" alt="" />
		<Highlight
			class="text-sm md:text-base whitespace-pre overflow-x-auto md:whitespace-pre-wrap p-2 md:p-4 rounded-md md:rounded-xl"
			code={codeInline}
		/>
	</div>
</section>

<section
	class="py-5 md:py-10 lg:py-20 px-4 md:px-10 bg-no-repeat bg-contain bg-center"
	style="background-image: url(/svg/gradient-circle-blue.svg);"
>
	<header class="md:p-5">
		<h2 class="font-extrabold text-4xl">Riser</h2>
		<p class="text-lg">
			This component, at the bottom of your page, encourages users to enable web monetization.
		</p>
	</header>
	<div class="flex flex-col gap-2 lg:items-center py-5 md:py-10 lg:py-20">
		<img class="filter drop-shadow-2xl lg:w-1/2" src="/riser.png" alt="" />
		<Highlight
			class="text-sm md:text-base whitespace-pre overflow-x-auto md:whitespace-pre-wrap p-2 md:p-4 rounded-md md:rounded-xl"
			code={codeRiser}
		/>
	</div>
</section>

<section
	class="py-5 md:py-10 lg:py-20 px-4 md:px-10 bg-no-repeat bg-contain bg-right"
	style="background-image: url(/svg/gradient-circle-orange.svg);"
>
	<header class="md:p-5">
		<h2 class="font-extrabold text-4xl">Modal</h2>
		<p class="text-lg">
			To temporarily block access to a piece of content, this Modal prompt directs users to activate
			Web Monetization before continuing.
		</p>
	</header>
	<div class="flex flex-col lg:flex-row-reverse gap-2 lg:items-center py-5 md:py-10 lg:py-20">
		<img class="filter drop-shadow-2xl lg:w-2/3" src="/modal.png" alt="" />
		<Highlight
			class="text-sm md:text-base whitespace-pre overflow-x-auto md:whitespace-pre-wrap p-2 md:p-4 rounded-md md:rounded-xl"
			code={codeModal}
		/>
	</div>
</section>
