<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { action } from "@storybook/addon-actions";
	import ToastCollapsed from "./ToastCollapsed.svelte";
</script>

<Meta
	title="Components/MonetToast/ToastCollapsed"
	component={ToastCollapsed}
	argTypes={{}}
/>

<Template let:args>
	<ToastCollapsed {...args} on:click={action("click")} />
</Template>

<Story name="Primary" args={{}} />
