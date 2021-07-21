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
		subtitle: { defaultValue: defaults.subtitle, control: { type: 'text' } },
		heading: { defaultValue: defaults.heading, control: { type: 'text' } },
		href: { defaultValue: defaults.href, control: { type: 'text' } },
		ctaText: { defaultValue: defaults.ctaText, control: { type: 'text' } },
		text: { defaultValue: defaults.text, control: { type: 'text' } },
	}}
/>

<Template let:args>
	<MonetModal {...args} />
</Template>

<Story name="Base" args={{}} />
