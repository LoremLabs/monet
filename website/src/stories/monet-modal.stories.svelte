<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import MonetModal, { defaults } from './monet-modal.svelte';
</script>

<Meta
	title="monet-modal"
	component={MonetModal}
	argTypes={{
		variant: {
			defaultValue: defaults.variant,
			control: { type: 'inline-radio', options: ['center', 'bottom'] },
		},
		theme: {
			defaultValue: defaults.theme,
			control: { type: 'inline-radio', options: ['light', 'dark', 'accent'] },
		},
		subtitle: { control: { type: 'text' } },
		heading: { control: { type: 'text' } },
		href: { control: { type: 'text' } },
		ctaText: { control: { type: 'text' } },
		text: { control: { type: 'text' } },
		type: { control: { type: 'inline-radio', options: defaults.types } },
	}}
/>

<Template let:args>
	<MonetModal {...args} />
</Template>

<Story name="Ad" args={{ type: 'ad', ...defaults.getProps('ad') }} />
<Story name="Subscription" args={{ type: 'sub', ...defaults.getProps('sub') }} />
<Story name="WebMonetization" args={{ type: 'webmon', ...defaults.getProps('webmon') }} />
