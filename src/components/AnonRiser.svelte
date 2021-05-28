<script lang="ts">
	import { fly } from "../utils/transfix";

	import "../assets/global.css";
	import Heading from "../atoms/Heading.svelte";
	import WebMonetizationLogo from "../atoms/WebMonetizationLogo.svelte";

	export let href = "#learn-more";

	export let ctaText = "Purchase from Provider";
	export let ctaTextMobile = ctaText;

	export let heading1 = "Want to unlock the article?";
	export let heading2 = "Purchase a Web Monetization pass now!";
	export let text =
		"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Elit sunt amet fugiat veniam occaecat fugiat.";

	export let visible = true;

</script>

{#if visible}
	<div transition:fly={{ x: 500, duration: 300 }} class="font-sans">
		<div class="bg-gray-900 w-95 md:w-98 h-6 rounded-t-3xl" />
		<div
			class="bg-white w-full relative cursor-pointer rounded-3xl rounded-tl-none shadow-xl-all hover:shadow-xl-all-darker focus-within:shadow-xl-all-darker"
		>
			<div
				class="hidden md:inline-flex py-10 gap-6 w-full box-border justify-between"
			>
				<div class="pl-20">
					<Heading
						color1="text-gray-900"
						color2="text-wm-green"
						{heading1}
						{heading2}
					/>
					<p
						class="max-w-prose-78 my-2 text-gray-500 text-base lg:text-lg !leading-tight"
					>
						{text}
					</p>
					<a {href} class="text-gray-900 font-semibold underline link-trigger"
						>Learn More <span aria-hidden="true">&rarr;</span></a
					>
				</div>
				<div class="self-center max-w-max flex-shrink-0">
					<div
						class="flex = gap-3 items-center p-5 xl:p-6 text-white bg-wm-green rounded-l-3xl"
					>
						<WebMonetizationLogo height="h-8" />
						<span class="max-w-xs text-base lg:text-lg">{ctaText}</span>
					</div>
				</div>
			</div>
			<div class="md:hidden py-6 pl-6">
				<div class="pr-3">
					<Heading
					color1="text-gray-900"
					color2="text-wm-green"
					{heading1}
					{heading2}
				/>
				</div>
				<div class="w-full box-border inline-flex gap-6 mt-2 justify-between">
					<p
						class="max-w-prose m-0 text-gray-500 text-sm !leading-tight line-clamp-3"
					>
						{text}
					</p>
					<div
						class="self-stretch max-w-max flex-shrink-0 flex flex-col items-center justify-center p-3 pl-8 text-white bg-wm-green rounded-l-3xl"
					>
						<WebMonetizationLogo height="h-6" />
						<span class="max-w-xs text-xs">{ctaTextMobile}</span>
					</div>
				</div>
				<div class="mt-1 text-sm">
					<a {href} class="text-wm-green font-semibold underline link-trigger"
						>Learn More <span aria-hidden="true">&rarr;</span></a
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
