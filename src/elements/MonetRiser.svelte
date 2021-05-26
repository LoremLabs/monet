<script lang="ts">
	import { writable } from "svelte/store";

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

	let monetizationAmount = writable({ amount: 0, unit: "" });
	isMonetizedPromise.then((isMonetized) => {
		if (!isMonetized) return;

		wm.addEventListener("monetizationprogress", (ev) => {
			const { amount, assetCode, assetScale } = ev.detail;
			monetizationAmount.update((current) => {
				return {
					amount: current.amount + Number(amount),
					unit: `${assetCode} 1e${assetScale}`,
				};
			});
		});
	});

</script>

{#await isMonetizedPromise}
	<p>detecting monetization...</p>
{:then isMonetized}
	{#if isMonetized}
		<div class="fixed bottom-0 left-0 p-2">
			<MonetizedRiser
				count={$monetizationAmount.amount}
				unit={$monetizationAmount.unit}
			/>
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
