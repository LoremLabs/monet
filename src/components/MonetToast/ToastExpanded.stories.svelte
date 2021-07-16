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
		text: { defaultValue: defaults.text, control: { type: "text" } },
	}}
/>

<Template let:args>
	<ToastExpanded {...args} on:click={action("Close button click")} />
</Template>

<Story name="Primary" args={{}} />
