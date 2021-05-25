<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import MonetizedRiser from "./MonetizedRiser.svelte";

</script>

<Meta
	title="Components/MonetizedRiser"
	component={MonetizedRiser}
	argTypes={{
		count: {
			control: { type: "number", min: 0, max: Number.MIN_SAFE_INTEGER },
		},
	}}
/>

<Template let:args>
	<MonetizedRiser {...args} />
</Template>

<Story name="Primary" args={{}} />
