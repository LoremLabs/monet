<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import WebMonetizationLogo from "./WebMonetizationLogo.svelte";
	export let props = (args) => {
		const classList = ["h-24", "w-24", "p-2"].concat([
			args.color,
			args.background,
		]);
		return { ...args, class: classList.join(" ") };
	};

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
	<WebMonetizationLogo {...props(args)} />
</Template>

<Story name="Green" args={{ color: "text-white", background: "bg-wm-green" }} />
<Story
	name="Dark"
	args={{ color: "text-wm-green", background: "bg-gray-900" }}
/>
