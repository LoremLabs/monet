<script lang="ts">
	import { fly } from "../utils/transfix";

	import "../assets/global.css";
	import Heading from "../atoms/Heading.svelte";
	import WebMonetizationLogo from "../atoms/WebMonetizationLogo.svelte";

	export let href = "#learn-more";

	export let ctaText = "Purchase from Provider";

	export let heading1 = "Want to unlock the article?";
	export let heading2 = "Purchase a Web Monetization pass now!";
	export let text =
		"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Elit sunt amet fugiat veniam occaecat fugiat.";

	export let visible = true;

</script>

{#if visible}
	<div transition:fly={{ x: 500, duration: 300 }}>
		<div class="bg-gray-900 w-98 h-6 rounded-t-3xl" />
		<div
			class="bg-white w-full font-sans shadow-xl-all rounded-3xl rounded-tl-none py-10 link-parent relative XXX-cursor-pointer hover:shadow-xl-all-darker focus-within:shadow-xl-all-darker inline-flex gap-6 justify-between"
		>
			<div class="pl-20">
				<Heading
					color1="text-gray-900"
					color2="text-wm-green"
					{heading1}
					{heading2}
				/>
				<p
					class="text-gray-500 max-w-prose-78 my-2 text-sm md:text-base lg:text-lg !leading-tight"
				>
					{text}
				</p>
				<a
					{href}
					class="text-wm-green md:text-gray-900 font-semibold underline link-trigger"
					>Learn More <span aria-hidden="true">&rarr;</span></a
				>
			</div>
			<div class="self-center flex-shrink-0 max-w-max">
				<div
					class="flex flex-col md:flex-row md:gap-3 items-center p-3 md:p-5 xl:p-6 text-white bg-wm-green rounded-l-3xl"
				>
					<WebMonetizationLogo class="h-8 w-8" />
					<span class="max-w-xs text-sm md:text-base lg:text-lg">{ctaText}</span
					>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.link-trigger::after {
		content: "";
		@apply absolute;
		@apply inset-0;
	}

</style>
