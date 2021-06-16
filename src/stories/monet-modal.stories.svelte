<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import MonetModal from './monet-modal.svelte';
</script>

<Meta
	title="monet-modal"
	component={MonetModal}
	argTypes={{
		variant: {
			control: { type: 'inline-radio', options: ['center', 'bottom'] },
		},
		theme: {
			control: { type: 'inline-radio', options: ['light', 'dark', 'accent'] },
		},
	}}
/>

<Template let:args>
	<MonetModal {...args} />
</Template>

<Story name="Base" args={{}} />
