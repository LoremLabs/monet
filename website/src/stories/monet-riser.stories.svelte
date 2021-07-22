<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import MonetRiser, { defaults } from './monet-riser.svelte';
</script>

<Meta
	title="monet-riser"
	component={MonetRiser}
	argTypes={{
		href: { control: { type: 'text' } },
		ctaText: { control: { type: 'text' } },
		ctaTextMobile: { control: { type: 'text' } },
		heading1: { control: { type: 'text' } },
		heading2: { control: { type: 'text' } },
		text: { control: { type: 'text' } },
		type: { control: { type: 'inline-radio', options: defaults.types } },
	}}
/>

<Template let:args>
	<MonetRiser {...args} />
</Template>

<Story name="Ad" args={{ type: 'ad', ...defaults.getProps('ad') }} />
<Story name="Subscription" args={{ type: 'sub', ...defaults.getProps('sub') }} />
<Story name="WebMonetization" args={{ type: 'webmon', ...defaults.getProps('webmon') }} />
