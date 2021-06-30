<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import PrefPanel from "./PrefPanel.svelte";
</script>

<Meta title="Components/PrefPanel" component={PrefPanel} argTypes={{}} />

<Template let:args>
	<PrefPanel {...args} />
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
