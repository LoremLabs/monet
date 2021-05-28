<script lang="ts">
	import AnonRiser from "../components/AnonRiser.svelte";
	import MonetizedRiser from "../components/MonetizedRiser.svelte";

	const wm = document.monetization;
	let isMonetizedPromise = new Promise<boolean>((resolve) => {
		if (!wm) {
			console.log("no extension/polyfill", false);
			return resolve(false);
		}
		console.log("waiting for monetizationprogress, or timeout=5s ...");

		const timeout = setTimeout(() => {
			console.log("timeout", false);
			resolve(false);
			wm.removeEventListener("monetizationprogress", onProgress);
		}, 5_000);
		wm.addEventListener("monetizationprogress", onProgress);

		function onProgress() {
			console.log("onprogress", true);
			resolve(true);
			clearTimeout(timeout);
			wm.removeEventListener("monetizationprogress", onProgress);
		}
	});

	const text = "This site is web-monetized.";

</script>

{#await isMonetizedPromise}
	<p>detecting monetization...</p>
{:then isMonetized}
	{#if isMonetized}
		<div class="fixed bottom-0 left-0 p-2">
			<MonetizedRiser {text} />
		</div>
	{:else}
		<div
			class="fixed bottom-0 left-0 right-0 p-4 w-full m-auto"
			style="max-width: 95vw;"
		>
			<AnonRiser />
		</div>
	{/if}
{:catch}
	<!-- nothing -->
{/await}
