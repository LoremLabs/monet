<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Heading from "./Heading.svelte";
</script>

<Meta title="Atoms/Heading" component={Heading} argTypes={{}} />

<Template let:args>
	<div class="font-sans">
		<Heading {...args} />
	</div>
</Template>

<Story name="Default" args={{}} />

<Story
	name="Two-color"
	args={{
		color1: "text-wm-green",
		color2: "text-gray-900",
		heading1: "Want to unlock the article?",
		heading2: "Purchase a Web Monetization pass now!",
	}}
/>

<Story
	name="Long texts"
	args={{
		heading1: "This heading is longer than usual that it needs to be.",
		heading2:
			"This heading is also longer than usual that it needs to be. Use it to test line-height maybe?",
		color1: "text-wm-green",
		color2: "text-gray-900",
	}}
/>
