<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { action } from "@storybook/addon-actions";
	import BasicToast from "./BasicToast.svelte";
</script>

<Meta
	title="Components/MonetToast/BasicToast"
	component={BasicToast}
	argTypes={{}}
/>

<Template let:args>
	<BasicToast {...args} on:click={action("Close button click")} />
</Template>

<Story
	name="Primary"
	args={{
		text: "This site, is web-monetized.",
	}}
/>
