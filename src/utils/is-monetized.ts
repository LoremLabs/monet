// TODO: use a svelte store
export default function isMonetized() {
	return new Promise<boolean>((resolve) => {
		return resolve(true);

		const wm = document.monetization;
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
}
