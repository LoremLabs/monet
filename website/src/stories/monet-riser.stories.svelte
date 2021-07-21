<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import MonetRiser, { defaults } from './monet-riser.svelte';
</script>

<Meta
	title="monet-riser"
	component={MonetRiser}
	argTypes={{
		href: { defaultValue: defaults.href, control: { type: 'text' } },
		ctaText: { defaultValue: defaults.ctaText, control: { type: 'text' } },
		ctaTextMobile: { defaultValue: defaults.ctaTextMobile, control: { type: 'text' } },
		heading1: { defaultValue: defaults.heading1, control: { type: 'text' } },
		heading2: { defaultValue: defaults.heading2, control: { type: 'text' } },
		text: { defaultValue: defaults.text, control: { type: 'text' } },
	}}
/>

<Template let:args>
	<MonetRiser {...args} />
</Template>

<Story name="Base" args={{}} />
