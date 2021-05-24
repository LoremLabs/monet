<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import AnonRiser from "./AnonRiser.svelte";

</script>

<Meta title="Components/AnonRiser" component={AnonRiser} argTypes={{}} />

<Template let:args>
	<AnonRiser {...args} />
</Template>

<Story name="Primary" args={{}} />
