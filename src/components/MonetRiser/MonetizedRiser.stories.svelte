<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import MonetizedRiser from "./MonetizedRiser.svelte";
</script>

<Meta
	title="Components/MonetRiser/MonetizedRiser"
	component={MonetizedRiser}
	argTypes={{}}
/>

<Template let:args>
	<div class="relative h-44 outline-black overflow-hidden">
		<div class="absolute bottom-0 left-0">
			<MonetizedRiser {...args} />
		</div>
	</div>
</Template>

<Story name="Primary" args={{ collapsed: false }} />
