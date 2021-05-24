<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Cta from "./Cta.svelte";

</script>

<Meta
	title="Atoms/Cta"
	component={Cta}
	argTypes={{
		direction: {
			control: {
				type: "radio",
				options: ["left", "right"],
			},
		},
	}}
/>

<Template let:args>
	<Cta {...args} />
</Template>

<Story name="Primary" args={{}} />
