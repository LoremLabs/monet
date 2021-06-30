<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Checkbox from "./Checkbox.svelte";
</script>

<Meta
	title="Atoms/Checkbox"
	component={Checkbox}
	argTypes={{
		id: { control: { type: "text" } },
		label: { control: { type: "text" } },
		description: { control: { type: "text" } },
	}}
/>

<Template let:args>
	<Checkbox id="checkbox-1" {...args} />
</Template>

<Story
	name="Default"
	args={{ label: "Advertisements", description: "All advertisements." }}
/>
