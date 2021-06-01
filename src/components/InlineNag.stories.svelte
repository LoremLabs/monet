<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import InlineNag from "./InlineNag.svelte";

</script>

<Meta
	title="Components/InlineNag"
	component={InlineNag}
	argTypes={{
		variant: {
			control: { type: "inline-radio", options: ["light", "dark"] },
		},
	}}
/>

<Template let:args>
	<InlineNag {...args} />
</Template>

<Story name="Primary" args={{}} />
