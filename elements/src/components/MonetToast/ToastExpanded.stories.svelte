<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { action } from "@storybook/addon-actions";
	import ToastExpanded from "./ToastExpanded.svelte";
	import * as defaults from "./defaults";
</script>

<Meta
	title="Components/MonetToast/ToastExpanded"
	component={ToastExpanded}
	argTypes={{
		text: {
			defaultValue: defaults.text(defaults.type),
			control: { type: "text" },
		},
		type: {
			defaultValue: defaults.type,
			control: { type: "inline-radio", options: defaults.types },
		},
	}}
/>

<Template let:args>
	<ToastExpanded {...args} on:click={action("Close button click")} />
</Template>

<Story name="Primary" args={{}} />
