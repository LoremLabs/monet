<script lang="ts">
	import WebMonetizationLogo from "../../atoms/WebMonetizationLogo.svelte";
	import type { Type, Theme, Variant } from "./defaults";

	export let type: Type;
	export let variant: Variant;
	export let theme: Theme;
	export let subtitle: string;
	export let heading: string;
	export let href: string;
	export let ctaText: string;
	export let text: string;
</script>

<div
	class="w-screen box-border {{
		center: 'max-w-xl p-4 xl:p-0',
		bottom: '',
	}[variant]}"
> 
	<div
		class="h-4 md:h-6 {{
			light: `bg-${type}-100`,
			dark: `bg-${type}-100`,
			accent: `bg-${type}-800`,
		}[theme]} {{
			center: 'rounded-t-3xl w-11/12',
			bottom: 'rounded-tr-3xl w-95 md:w-98',
		}[variant]}"
	/>
	<div
		class="font-sans w-full shadow-xl-all focus-within:shadow-xl-all-darker {{
			light: 'bg-white text-gray-800',
			dark: 'bg-gray-900 text-gray-300',
			accent: `bg-${type}-500 text-white`,
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
							light: `text-${type}-500`,
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
							light: `bg-${type}-800`,
							dark: `bg-${type}-800`,
							accent: `bg-gray-400`,
						}[theme]} text-white no-underline {{
							center: 'flex-col py-3 px-5',
							bottom:
								'flex-col md:flex-row md:gap-3 p-3 sm:p-5 w-min sm:w-auto',
						}[variant]}"
					>
						<span
							class="h-6 {{
								ad: 'text-ad-500',
								sub: 'text-sub-500',
								webmon: 'text-white',
							}[type]}">
							{#if type === 'webmon'}
							<WebMonetizationLogo />
							{/if}
							</span
						>
						<span class="max-w-xs text-sm self-stretch">{ctaText}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
	<span class="hidden bg-ad-100 bg-sub-100 bg-webmon-100 bg-ad-500 bg-sub-500 bg-webmon-500 bg-ad-800 bg-sub-800 bg-webmon-800 text-ad-500 text-sub-500 text-webmon-500" /> <!-- purge css dynamic class workaround add new types here. -->
</div>
