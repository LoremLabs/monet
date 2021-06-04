<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Nag from './Nag.svelte';
</script>

<Meta title="Monet/Nags/Nag" component={Nag} argTypes={{}} />

<Template let:args>
	<Nag {...args} />
</Template>

<Story
	name="Base/Nag"
	args={{
		subscriber: {},
	}}
/>
