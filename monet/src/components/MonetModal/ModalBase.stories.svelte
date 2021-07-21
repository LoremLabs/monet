<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import ModalBase from "./ModalBase.svelte";
	import * as defaults from "./defaults";

	const text = { control: { type: "text" } };

	const demo_modalBackgroundClasslist =
		"relative bg-gray-600/60 w-screen h-screen max-w-full max-h-full";
</script>

<Meta
	title="Components/MonetModal"
	component={ModalBase}
	parameters={{
		layout: "fullscreen",
	}}
	argTypes={{
		theme: {
			defaultValue: defaults.theme,
			control: { type: "inline-radio", options: defaults.themes },
		},
		variant: {
			defaultValue: defaults.variant,
			control: { type: "inline-radio", options: defaults.variants },
		},
		subtitle: { ...text },
		heading: { ...text },
		href: { ...text },
		ctaText: { ...text },
		text: { ...text },
		type: {
			defaultValue: defaults.type,
			control: { type: "inline-radio", options: defaults.types },
		},
	}}
/>

<Template let:args id="Base">
	<div class="p-8 outline-black box-border m-4">
		<ModalBase {...args} />
	</div>
</Template>

<Template let:args id="Bottom">
	<div class={demo_modalBackgroundClasslist}>
		<div class="fixed bottom-0 left-0 right-0">
			<ModalBase {...args} />
		</div>
	</div>
</Template>

<Template let:args id="Center">
	<div class={demo_modalBackgroundClasslist}>
		<div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<ModalBase {...args} />
		</div>
	</div>
</Template>

<Story name="Base" template="Base" args={{ ...defaults.getProps("webmon") }} />

<Story
	template="Center"
	name="Type/Ad"
	args={{ type: "ad", ...defaults.getProps("ad") }}
/>
<Story
	template="Center"
	name="Type/Subscription"
	args={{ type: "sub", ...defaults.getProps("sub") }}
/>
<Story
	template="Center"
	name="Type/WebMonetization"
	args={{ type: "webmon", ...defaults.getProps("webmon") }}
/>

<Story
	template="Center"
	name="Theme/Light"
	args={{ type: "webmon", theme: "light", ...defaults.getProps("webmon") }}
/>
<Story
	template="Center"
	name="Theme/Dark"
	args={{ type: "webmon", theme: "dark", ...defaults.getProps("webmon") }}
/>
<Story
	template="Center"
	name="Theme/Accent"
	args={{ type: "webmon", theme: "accent", ...defaults.getProps("webmon") }}
/>

<Story
	name="Variant/Center"
	template="Center"
	args={{ variant: "center", ...defaults.getProps("webmon") }}
/>
<Story
	name="Variant/Bottom"
	template="Bottom"
	args={{ variant: "bottom", ...defaults.getProps("webmon") }}
/>
