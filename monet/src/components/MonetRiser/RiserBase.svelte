<script lang="ts">
	import { fly } from "../../utils/transfix";

	import type { Type } from "./defaults";
	import Heading from "../../atoms/Heading.svelte";
	import WebMonetizationLogo from "../../atoms/WebMonetizationLogo.svelte";

	export let type: Type;
	export let href: string;
	export let ctaText: string;
	export let ctaTextMobile: string;
	export let heading1: string;
	export let heading2: string;
	export let text: string;
</script>

<div transition:fly={{ x: 500, duration: 300 }} class="font-sans">
	<div class={`bg-${type}-500 w-95 md:w-98 h-6 rounded-t-3xl`} />
	<div
		class="bg-white w-full relative cursor-pointer rounded-3xl rounded-tl-none shadow-xl-all hover:shadow-xl-all-darker focus-within:shadow-xl-all-darker"
	>
		<div class="py-6 pl-6 md:py-10 md:pl-20">
			<div class="pr-3">
				<Heading
					color1="text-gray-900"
					color2={`text-${type}-500`}
					{heading1}
					{heading2}
				/>
			</div>
			<div class="w-full box-border flex gap-6 mt-2 justify-between">
				<div>
					<p
						class="max-w-prose md:max-w-prose-78 m-0 text-gray-500 text-sm md:text-base lg:text-lg !leading-tight line-clamp-3 sm:line-clamp-none"
					>
						{text}
					</p>
					<a
						{href}
						class="text-gray-900 inline-block mt-1 text-sm md:text-base font-semibold underline after:absolute after:inset-0"
						>Learn More <span aria-hidden="true">&rarr;</span></a
					>
				</div>
				<div
					class={`self-stretch md:self-center max-w-max flex-shrink-0 flex flex-col md:flex-row md:gap-3 items-center justify-center p-3 pl-6 md:p-5 xl:p-6 text-white bg-${type}-500 rounded-l-3xl md:drop-shadow-lg md:-translate-y-1/2`}
				>
					<span
						class="h-6 md:h-8 {{
							ad: 'text-red-500',
							sub: 'text-blue-500',
							webmon: 'text-white',
						}[type]}">
						{#if type === 'webmon'}
						<WebMonetizationLogo />
						{/if}
						</span
					>
					<span class="max-w-xs text-xs md:text-sm xl:text-base">
						<span class="hidden md:inline">{ctaText}</span>
						<span class="md:hidden">{ctaTextMobile}</span>
					</span>
				</div>
			</div>
		</div>
	</div>
	<span class="hidden bg-ad-100 bg-sub-100 bg-webmon-100 bg-ad-500 bg-sub-500 bg-webmon-500 bg-ad-800 bg-sub-800 bg-webmon-800 text-ad-500 text-sub-500 text-webmon-500" /> <!-- purge css dynamic class workaround add new types here. -->
</div>
