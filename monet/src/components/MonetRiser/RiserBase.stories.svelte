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
		href: { control: { type: "text" } },
		ctaText: { control: { type: "text" } },
		ctaTextMobile: { control: { type: "text" } },
		heading1: { control: { type: "text" } },
		heading2: { control: { type: "text" } },
		text: { control: { type: "text" } },
		type: {
			defaultValue: defaults.type,
			control: { type: "inline-radio", options: defaults.types },
		},
	}}
/>

<Template let:args>
	<RiserBase {...args} />
</Template>

<Story name="Type/Ad" args={{ type: "ad", ...defaults.getProps("ad") }} />
<Story
	name="Type/Subscription"
	args={{ type: "sub", ...defaults.getProps("sub") }}
/>
<Story
	name="Type/WebMonetization"
	args={{ type: "webmon", ...defaults.getProps("webmon") }}
/>
