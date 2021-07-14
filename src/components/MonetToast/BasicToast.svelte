<script>
	import "../../assets/global.css";
	import WebMonetizationLogo from "../../atoms/WebMonetizationLogo.svelte";
	import CloseIcon from "../../assets/icons/close.svelte";

	export let text = "This site is web-monetized.";
</script>

<div class="relative md:w-max max-w-md mt-6 mr-6">
	<div class="bg-gray-900 w-11/12 h-4 rounded-t-2xl" />
	<button
		type="button"
		title="Close"
		class="border-none bg-white absolute -top-5 -right-5 h-8 w-8 z-10 p-1 shadow-xl-all rounded-full flex place-self-center cursor-pointer"
		on:click
	>
		<CloseIcon />
	</button>
	<div
		class="bg-white w-full overflow-hidden font-sans shadow-xl-all rounded-2xl rounded-tl-none inline-flex gap-4 py-4 items-center justify-between"
	>
		<div class="pl-4 text-gray-900 text-lg md:text-xl">
			{text}
		</div>
		<div
			class="flex-shrink-0 flex p-4 bg-gray-900 text-wm-green rounded-l-full"
		>
			<WebMonetizationLogo height="h-10" animate />
		</div>
	</div>
</div>
