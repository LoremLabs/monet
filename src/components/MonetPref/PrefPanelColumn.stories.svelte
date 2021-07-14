<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import PrefPanelColumn from "./PrefPanelColumn.svelte";
</script>

<Meta
	title="Components/MonetPref/Column"
	component={PrefPanelColumn}
	argTypes={{}}
/>

<Template let:args>
	<div class="w-60 h-80">
		<PrefPanelColumn {...args} />
	</div>
</Template>

<Story
	name="Primary"
	args={{
		items: [
			{ id: 1, title: "Item 1", enabled: true },
			{ id: 2, title: "Item 2", enabled: true },
			{ id: 3, title: "Item 3", enabled: true },
			{ id: 4, title: "Item 4", enabled: false },
			{ id: 5, title: "Item 5", enabled: false },
		],
	}}
/>
