<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import MonetizedRiser from "./MonetizedRiser.svelte";

</script>

<Meta
	title="Components/MonetizedRiser"
	component={MonetizedRiser}
	argTypes={{}}
/>

<Template let:args>
	<MonetizedRiser {...args} />
</Template>

<Story name="Primary" args={{ collapsed: false }} />
