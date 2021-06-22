<script context="module" lang="ts">
	export type Theme = "light" | "dark" | "accent";
	export type Variant = "center" | "bottom";
</script>

<script lang="ts">
	import WebMonetizationLogo from "../atoms/WebMonetizationLogo.svelte";

	export let variant: Variant = "center";
	export let theme: Theme = "light";

	export let subtitle = "The news you need, when you need it!";
	export let heading = "Read more with Web Monetization";
	export let href = "#learn-more";
	export let ctaText = "Purchase";
	export let text =
		"Our journalism is supported by readers like you. Web Monetization saves you from obnoxious ads and enables us to report out the news you need. We call that a win-win.";
</script>

<div
	class="w-screen box-border {{
		center: 'max-w-xl p-4 xl:p-0',
		bottom: '',
	}[variant]}"
>
	<div
		class="h-4 md:h-6 {{
			light: 'bg-wm-green',
			dark: 'bg-wm-green',
			accent: 'bg-gray-800',
		}[theme]} {{
			center: 'rounded-t-3xl w-11/12',
			bottom: 'rounded-tr-3xl w-95 md:w-98',
		}[variant]}"
	/>
	<div
		class="font-sans w-full shadow-xl-all focus-within:shadow-xl-all-darker {{
			light: 'bg-white text-gray-800',
			dark: 'bg-gray-900 text-gray-300',
			accent: 'bg-wm-green text-white',
		}[theme]} {{
			center: 'rounded-3xl rounded-tl-none ',
			bottom: 'rounded-tr-3xl',
		}[variant]}"
	>
		<div class="w-full box-border py-6 sm:py-10 md:py-20">
			<div class="px-3 sm:px-5 md:px-10">
				{#if subtitle}
					<p
						class="uppercase m-0 mb-1 tracking-tighter text-sm font-semibold {{
							light: 'text-wm-green',
							dark: 'text-white',
							accent: 'text-white',
						}[theme]}"
					>
						{subtitle}
					</p>
				{/if}
				<h2
					class="font-extrabold text-2xl leading-none xl:text-3xl xl:leading-none m-0 mb-1 {{
						light: 'text-gray-800',
						dark: 'text-wm-green',
						accent: 'text-gray-800',
					}[theme]}"
				>
					{heading}
				</h2>
			</div>
			<div class="flex justify-between">
				<p
					class="px-3 sm:px-5 md:px-10 max-w-prose-78 my-2 text-base leading-tight lg:text-lg lg:leading-snug	"
				>
					{text}
				</p>
				<div
					class="self-center flex-shrink-0 text-center {{
						center: '-translate-y-1/2',
						bottom: 'md:-translate-y-1/3',
					}[variant]}"
				>
					<a
						{href}
						class="flex items-center xl:p-6 rounded-l-3xl {{
							light: 'bg-wm-green',
							dark: 'bg-wm-green',
							accent: 'bg-gray-800',
						}[theme]} text-white no-underline {{
							center: 'flex-col py-3 px-5',
							bottom:
								'flex-col md:flex-row md:gap-3 p-3 sm:p-5 w-min sm:w-auto',
						}[variant]}"
					>
						<WebMonetizationLogo height="h-6" />
						<span class="max-w-xs text-sm self-stretch">{ctaText}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
