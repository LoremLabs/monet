<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import MonetToast from './monet-toast.svelte';
</script>

<Meta title="monet-toast" component={MonetToast} argTypes={{}} />

<Template let:args>
	<MonetToast {...args} />
</Template>

<Story name="Base" args={{}} />
