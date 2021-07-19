<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import MonetToast from "./ToastBase.svelte";
	import * as defaults from "./defaults";
</script>

<Meta
	title="Components/MonetToast"
	component={MonetToast}
	argTypes={{
		text: {
			value: defaults.text(defaults.type),
			control: { type: "text" },
		},
		type: {
			defaultValue: defaults.type,
			control: { type: "inline-radio", options: defaults.types },
		},
	}}
/>

<Template let:args>
	<div class="relative h-44 outline-black overflow-hidden">
		<div class="absolute bottom-0 left-0">
			<MonetToast {...args} />
		</div>
	</div>
</Template>

<Story name="Ad" args={{ type: "ad", text: defaults.text("ad") }} />
<Story name="Subscription" args={{ type: "sub", text: defaults.text("sub") }} />
<Story
	name="WebMonetization"
	args={{ type: "webmon", text: defaults.text("webmon") }}
/>
