<script lang="ts">
	import "../assets/global.css";
	export let checked: boolean = false;
	export let label: string;
	export let id: string;
	export let description: string | undefined;
</script>

<div class="cursor-pointer flex gap-1 items-center relative {$$props.class}">
	<input
		type="checkbox"
		bind:checked
		on:change
		{id}
		name={id}
		class="focus:ring-transparent h-4 w-4 text-gray-600 border border-solid border-gray-300 rounded"
	/>
	<div class="font-sans font-medium leading-tight text-gray-700 text-base">
		<label for={id} class="after:absolute after:inset-0">{label}</label>
		{#if description}
			<p class="m-0 font-normal text-sm text-gray-500">{description}</p>
		{/if}
	</div>
</div>
