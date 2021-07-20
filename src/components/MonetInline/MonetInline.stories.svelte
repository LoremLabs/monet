<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import MonetInline from "./MonetInline.svelte";
	import * as defaults from "./defaults";

	const text = { control: { type: "text" } };
</script>

<Meta
	title="Components/MonetInline"
	component={MonetInline}
	argTypes={{
		type: {
			defaultValue: defaults.type,
			control: { type: "inline-radio", options: defaults.types },
		},
		theme: {
			defaultValue: defaults.theme,
			control: {
				type: "inline-radio",
				options: ["light", "dark", "dim"],
			},
		},
		heading1: { defaultValue: defaults.heading1, ...text },
		heading2: { defaultValue: defaults.heading2(defaults.type), ...text },
		subtitle: { defaultValue: defaults.subtitle, ...text },
		body: { defaultValue: defaults.body(defaults.type), ...text },
		ctaText: { defaultValue: defaults.ctaText(defaults.type), ...text },
	}}
/>

<Template let:args>
	<MonetInline {...args} />
</Template>

<Template let:args id="InlineBlock">
	<div class="outline-black max-w-prose-78 p-4">
		<p class="font-sans text-base">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita
			quam eaque ipsum numquam perspiciatis ducimus nam, quibusdam fugit et id
			nemo non quis similique, blanditiis aperiam totam qui nostrum?
		</p>
		<MonetInline {...args} />
		<p class="font-sans text-base">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
			nulla veritatis odio, quo nobis aliquid perferendis vel ut dolores labore
			ullam mollitia quis, iste et? Magni ipsa similique blanditiis numquam?
		</p>
	</div>
</Template>

<Story name="Ad" args={{ type: "ad", ...defaults.getProps("ad") }} />
<Story
	name="Subscription"
	args={{ type: "sub", ...defaults.getProps("sub") }}
/>
<Story
	name="WebMonetization"
	args={{ type: "webmon", ...defaults.getProps("webmon") }}
/>

<Story name="Theme/Light" args={{}} />
<Story name="Theme/Dark" args={{ theme: "dark" }} />
<Story name="Theme/Dimmed" args={{ theme: "dim" }} />

<Story name="With subtitle" args={{ theme: "dark", heading1: "" }} />
<Story name="Inline block" template="InlineBlock" args={{ theme: "dark" }} />
