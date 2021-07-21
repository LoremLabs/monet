<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Logo from "./Logo.svelte";
	import * as defaults from "../utils/constants";
</script>

<Meta
	title="Atoms/Logo"
	component={Logo}
	argTypes={{
		type: {
			defaultValue: defaults.type,
			control: { type: "inline-radio", options: defaults.types },
		},
	}}
/>

<Template let:args>
	<div class="{args.background} {args.height} {args.color} p-2 w-max">
		<Logo type={args.type} />
	</div>
</Template>

<Story
	name="Green"
	args={{
		color: "text-white",
		background: "bg-wm-green",
		height: "h-24",
	}}
/>
<Story
	name="Dark"
	args={{
		color: "text-wm-green",
		background: "bg-gray-900",
		height: "h-24",
	}}
/>
