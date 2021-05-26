<script lang="ts">
	import "../assets/global.css";
	import WebMonetizationLogo from "../atoms/WebMonetizationLogo.svelte";

	export let href = "#learn-more";
	export let ctaText = "Purchase";

</script>

<div class="bg-gray-900 w-98 h-6 rounded-t-3xl" />
<div
	class="bg-white w-full font-sans shadow-xl-all rounded-3xl rounded-tl-none inline-flex gap-6 py-10 link-parent relative cursor-pointer hover:shadow-xl-all-darker focus-within:shadow-xl-all-darker"
>
	<div class="pl-10">
		<h2
			class="font-extrabold xl:text-3xl md:text-2xl text-xl m-0 mb-1 tracking-tighter"
		>
			<span class="block text-gray-900">Want to unlock the article?</span>
			<span class="block text-wm-green"
				>Purchase a Web Monetization pass now!</span
			>
		</h2>
		<p class="text-gray-500 my-1">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur
			autem minus ex, dignissimos deleniti ipsum, neque saepe, obcaecati hic
			dolorem. Laudantium eos ullam dolore.
		</p>
		<p>
			<a {href} class="text-gray-900 font-semibold underline link-trigger"
				>Learn More <span aria-hidden="true">&rarr;</span></a
			>
		</p>
	</div>
	<div class="self-center flex-grow">
		<div
			class="flex flex-col md:flex-row md:gap-3 items-center p-3 md:p-5 xl:p-6 text-white bg-wm-green rounded-l-3xl"
		>
			<WebMonetizationLogo class="h-8 w-8" />
			<span class="max-w-xs">{ctaText}</span>
		</div>
	</div>
</div>

<style>
	.link-trigger::after {
		content: "";
		@apply absolute;
		@apply inset-0;
	}

</style>
