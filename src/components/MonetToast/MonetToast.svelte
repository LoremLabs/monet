<script lang="ts">
	import ToastBase from "./ToastBase.svelte";
	import "../../assets/global.css";

	export let visible = true;
	export let collapsed = false;
</script>

<div
	class="fixed bottom-2 left-2 right-2 p-4 w-full m-auto"
	style="max-width: 95vw;"
	hidden={!visible}
>
	<ToastBase {collapsed} />
</div>
