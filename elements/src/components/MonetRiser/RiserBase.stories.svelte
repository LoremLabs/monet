<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import RiserBase from "./RiserBase.svelte";
	import * as defaults from "./defaults";

	const text = { control: { type: "text" } };
</script>

<Meta
	title="Components/MonetRiser"
	component={RiserBase}
	argTypes={{
		href: { defaultValue: defaults.href, ...text },
		ctaText: { defaultValue: defaults.ctaText, ...text },
		ctaTextMobile: { defaultValue: defaults.ctaTextMobile, ...text },
		heading1: { defaultValue: defaults.heading1, ...text },
		heading2: { defaultValue: defaults.heading2, ...text },
		text: { defaultValue: defaults.text, ...text },
	}}
/>

<Template let:args>
	<RiserBase {...args} />
</Template>

<Story
	name="Primary"
	args={{
		ctaTextMobile: "Purchase",
	}}
/>
