<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import InlineNag from "./InlineNag.svelte";

</script>

<Meta
	title="Components/InlineNag"
	component={InlineNag}
	argTypes={{
		theme: {
			control: {
				type: "inline-radio",
				options: ["light", "dark", "dim"],
			},
		},
	}}
/>

<Template let:args>
	<InlineNag {...args} />
</Template>

<Story name="Light" args={{ subtitle: "" }} />
<Story name="Dark" args={{ theme: "dark", subtitle: "" }} />
<Story name="Dimmed" args={{ theme: "dim", subtitle: "" }} />
<Story name="With subtitle" args={{ theme: "dark", heading1: "" }} />
