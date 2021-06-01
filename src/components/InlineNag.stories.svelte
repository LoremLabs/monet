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

<Story
	name="Light"
	args={{
		subtitle: "",
	}}
/>
<Story
	name="Dark"
	args={{
		variant: "dark",
		subtitle: "",
	}}
/>
<Story
	name="With subtitle"
	args={{
		variant: "dark",
	}}
/>
