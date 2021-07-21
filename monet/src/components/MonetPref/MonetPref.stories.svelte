<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { action } from "@storybook/addon-actions";
	import MonetPref from "./MonetPref.svelte";
</script>

<Meta title="Components/MonetPref" component={MonetPref} argTypes={{}} />

<Template let:args>
	<MonetPref {...args} on:change={action("change")} />
</Template>

<Story
	name="Primary"
	args={{
		options: [
			{
				id: "ads/*",
				title: "Advertisements",
				description: "All advertisements.",
				enabled: true,
			},
			{
				id: "webmonetization/*",
				title: "WebMonetization",
				description: "Streaming micropayments.",
				enabled: true,
			},
			{
				id: "subscription/site",
				title: "Subscription",
				description: "A $9 per year subscription.",
				enabled: true,
			},
			{
				id: "ads/behavioral",
				title: "Behavioral Ads",
				description: "Highly relevant and personalized ads.",
				enabled: false,
			},
		],
	}}
/>
