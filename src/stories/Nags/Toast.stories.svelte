<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Toast from './Toast.svelte';
</script>

<Meta title="Monet/Nags/Toast" component={Toast} argTypes={{}} />

<Template let:args>
	<Toast {...args} />
</Template>

<Story
	name="Nags/Toast/Success"
	args={{
		type: 'success',
		cta: 'subscribe',
		cta2: 'please',
	}}
/>

<Story
	name="Nags/Toast/Warning"
	args={{
		type: 'warn',
		cta: 'subscribe',
		cta2: 'please',
	}}
/>
