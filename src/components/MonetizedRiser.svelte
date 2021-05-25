<script lang="ts">
	import "../assets/global.css";
	import WebMonetizationLogo from "../atoms/WebMonetizationLogo.svelte";
	import CloseIcon from "../assets/icons/close.svelte";

	export let count = 32;
	export let unit = "ads";

</script>

<div class="relative w-max max-w-md mt-6 mr-6">
	<div class="bg-gray-900 w-11/12 h-4 rounded-t-2xl" />
	<button
		type="button"
		class="border-none bg-white absolute -top-5 -right-5 h-8 w-8 z-10 p-1 shadow-xl-all rounded-full flex place-self-center cursor-pointer"
	>
		<CloseIcon />
	</button>
	<div
		class="bg-white w-full overflow-hidden font-sans shadow-xl-all rounded-2xl rounded-tl-none inline-flex gap-6 py-4 hover:shadow-xl-all-darker focus-within:shadow-xl-all-darker"
	>
		<div class="pl-6 inline-flex items-center gap-2 overflow-auto">
			<CloseIcon
				class="bg-wm-green text-white h-12 w-12 rounded-full flex-shrink-0"
			/>
			<span class="overflow-hidden overflow-ellipsis">
				<span class="text-gray-900 text-3xl font-extrabold"
					>{count.toLocaleString()}</span
				>
				<span class="text-wm-green text-2xl">{unit}</span>
			</span>
		</div>
		<div class="self-center flex-shrink-0 flex p-3 bg-gray-900 rounded-l-full">
			<WebMonetizationLogo class="h-8 w-8 text-wm-green" />
		</div>
	</div>
</div>
