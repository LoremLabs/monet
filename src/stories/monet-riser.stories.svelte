<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import MonetRiser from './monet-riser.svelte';
</script>

<Meta title="monet-riser" component={MonetRiser} argTypes={{}} />

<Template let:args>
	<MonetRiser {...args} />
</Template>

<Story name="Base" args={{}} />
