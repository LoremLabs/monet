<script lang="ts">
	import MonetRiser from "../components/MonetRiser.svelte";

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

</script>

{#await isMonetizedPromise then isMonetized}
	<MonetRiser {isMonetized} />
{:catch}
	<!-- nothing -->
{/await}
