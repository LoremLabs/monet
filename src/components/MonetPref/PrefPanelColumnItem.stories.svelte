<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { action } from "@storybook/addon-actions";
	import PrefPanelColumnItem from "./PrefPanelColumnItem.svelte";
</script>

<Meta
	title="Components/MonetPref/ColumnItem"
	component={PrefPanelColumnItem}
	argTypes={{
		id: { control: { type: "text" } },
		title: { control: { type: "text" } },
		description: { control: { type: "text" } },
	}}
/>

<Template let:args>
	<div class="max-w-sm">
		<div class="max-w-max">
			<PrefPanelColumnItem {...args} on:change={action("change")} />
		</div>
	</div>
</Template>

<Story
	name="Default"
	args={{
		id: "webmonetization/*",
		title: "Behavioral Advertisements",
		description: "Highly relevant and personalized ads.",
		enabled: false,
	}}
/>
