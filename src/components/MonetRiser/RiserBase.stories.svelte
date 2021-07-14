<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import RiserBase from "./RiserBase.svelte";
</script>

<Meta title="Components/MonetRiser" component={RiserBase} argTypes={{}} />

<Template let:args>
	<RiserBase {...args} />
</Template>

<Story
	name="Primary"
	args={{
		ctaTextMobile: "Purchase",
	}}
/>
