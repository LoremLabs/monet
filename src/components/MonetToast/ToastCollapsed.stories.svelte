<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { action } from "@storybook/addon-actions";
	import ToastCollapsed from "./ToastCollapsed.svelte";
	import * as defaults from "./defaults";
</script>

<Meta
	title="Components/MonetToast/ToastCollapsed"
	component={ToastCollapsed}
	argTypes={{
		type: {
			defaultValue: defaults.type,
			control: { type: "inline-radio", options: defaults.types },
		},
	}}
/>

<Template let:args>
	<ToastCollapsed {...args} on:click={action("click")} />
</Template>

<Story name="Primary" args={{}} />
