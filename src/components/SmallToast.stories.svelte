<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { action } from "@storybook/addon-actions";
	import SmallToast from "./SmallToast.svelte";

</script>

<Meta
	title="Components/MonetizedRiser/SmallToast"
	component={SmallToast}
	argTypes={{}}
/>

<Template let:args>
	<SmallToast {...args} on:click={action("click")} />
</Template>

<Story name="Primary" args={{}} />
