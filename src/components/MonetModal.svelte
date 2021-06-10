<script context="module" lang="ts">
	import type { Theme, Variant } from "../molecules/ModalBase.svelte";
	export type { Theme, Variant };

</script>

<script lang="ts">
	import ModalBase from "../molecules/ModalBase.svelte";
	import "../assets/global.css";

	export let isMonetized = false;
	export let theme: Theme = "light";
	export let variant: Variant = "center";

</script>

{#if !isMonetized}
	<div
		class="fixed z-10 inset-0 overflow-y-auto"
		role="dialog"
		aria-modal="true"
	>
		<div
			class="min-h-screen flex justify-center {{
				center: 'items-center',
				bottom: 'items-end',
			}[variant]}"
		>
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 -z-1" />
			<ModalBase {theme} {variant} />
		</div>
	</div>
{/if}
