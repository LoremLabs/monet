<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import MonetToast, { defaults } from './monet-toast.svelte';
</script>

<Meta
	title="monet-toast"
	component={MonetToast}
	argTypes={{
		type: { control: { type: 'inline-radio', options: defaults.types } },
		text: { control: { type: 'text' } },
	}}
/>

<Template let:args>
	<MonetToast {...args} />
</Template>

<Story name="Ad" args={{ type: 'ad', ...defaults.getProps('ad') }} />
<Story name="Subscription" args={{ type: 'sub', ...defaults.getProps('sub') }} />
<Story name="WebMonetization" args={{ type: 'webmon', ...defaults.getProps('webmon') }} />
