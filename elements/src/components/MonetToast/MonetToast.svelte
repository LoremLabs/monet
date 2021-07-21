<script lang="ts" context="module">
	import * as defaults from "./defaults";
	export { defaults };
</script>

<script lang="ts">
	import ToastBase from "./ToastBase.svelte";
	import "../../assets/global.css";

	export let type = defaults.type;
	export let text = defaults.text(type);
	export let collapsed = false;
</script>

<div
	class="fixed bottom-2 left-2 right-2 p-4 w-full m-auto"
	style="max-width: 95vw;"
>
	<ToastBase {type} {text} {collapsed} />
</div>
