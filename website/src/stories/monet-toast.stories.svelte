<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import MonetToast, { defaults } from './monet-toast.svelte';
</script>

<Meta
	title="monet-toast"
	component={MonetToast}
	argTypes={{
		text: { defaultValue: defaults.text, control: { type: 'text' } },
	}}
/>

<Template let:args>
	<MonetToast {...args} />
</Template>

<Story name="Base" args={{}} />
