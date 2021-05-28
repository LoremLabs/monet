<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import WebMonetizationLogo from "./WebMonetizationLogo.svelte";

</script>

<Meta
	title="Atoms/WebMonetizationLogo"
	component={WebMonetizationLogo}
	argTypes={{
		color: {
			control: "text",
			description: "A tailwind class, e.g. `text-black`",
		},
		background: {
			control: "text",
			description: "A tailwind class, e.g. `bg-wm-green`",
		},
	}}
/>

<Template let:args>
	<div class="{args.background} p-2 w-max">
		<WebMonetizationLogo {...args} />
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
