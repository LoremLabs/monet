<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import MonetRiserBase from "./MonetRiser.svelte";

</script>

<Meta
	title="Components/MonetRiser"
	component={MonetRiserBase}
	argTypes={{}}
/>

<Template let:args>
	<MonetRiserBase {...args} />
</Template>

<Story name="Primary" args={{}} />
