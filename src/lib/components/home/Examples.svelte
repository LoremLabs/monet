<script>
	import ExampleHeader from './ExampleHeader.svelte';
</script>

<section
	class="py-24 px-4 md:px-10 bg-no-repeat bg-contain bg-center flex flex-col md:flex-row-reverse gap-2"
	style="background-image: url(/svg/gradient-odd.svg);"
>
	<div class="md:mt-16 p-5">
		<ExampleHeader name="monet-inline" title="Inline Monetizer" />
		<p class="m-0 text-lg max-w-prose text-gray-700">
			This design component prompts users while reading an article.
		</p>
	</div>
	<a class="focus:outline-none" href="/components/monet-inline">
		<img class="filter drop-shadow-2xl md:w-2/3" src="/img/inline.png" alt="" />
	</a>
</section>

<section
	class="py-12 px-4 md:px-10 bg-no-repeat bg-contain bg-bottom flex flex-col items-center gap-2"
	style="background-image: url(/svg/gradient-circle-blue.svg);"
>
	<div class="p-5">
		<ExampleHeader name="monet-riser" title="Riser" />
		<p class="m-0 text-lg max-w-prose text-gray-700">
			This component, at the bottom of your page, encourages users to enable web monetization.
		</p>
	</div>
	<a class="focus:outline-none" href="/components/monet-riser">
		<img class="filter drop-shadow-2xl md:w-2/3" src="/img/riser.png" alt="" />
	</a>
</section>

<section
	class="py-24 px-4 md:px-10 bg-no-repeat bg-contain bg-right flex flex-col md:flex-row gap-2"
	style="background-image: url(/svg/gradient-circle-orange.svg);"
>
	<div class="md:mt-16 p-5">
		<ExampleHeader name="monet-modal" title="Modal" />
		<p class="m-0 text-lg max-w-prose text-gray-700">
			To temporarily block access to a piece of content, this Modal prompt directs users to activate
			Web Monetization before continuing.
		</p>
	</div>
	<a class="focus:outline-none" href="/components/monet-modal">
		<img class="filter drop-shadow-2xl lg:w-2/3" src="/img/modal.png" alt="" />
	</a>
</section>
