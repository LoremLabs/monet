<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import MonetInline, { defaults } from './monet-inline.svelte';
</script>

<Meta
	title="monet-inline"
	component={MonetInline}
	argTypes={{
		theme: {
			defaultValue: defaults.theme,
			control: { type: 'inline-radio', options: ['light', 'dark', 'dim'] },
		},
		heading1: { control: { type: 'text' } },
		heading2: { control: { type: 'text' } },
		subtitle: { control: { type: 'text' } },
		body: { control: { type: 'text' } },
		ctaText: { control: { type: 'text' } },
		href: { control: { type: 'text' } },
		type: { control: { type: 'inline-radio', options: defaults.types } },
	}}
/>

<Template let:args>
	<div class="p-4">
		<p class="text-base max-w-prose my-2">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum placeat ea totam inventore
			maxime molestias quisquam nobis quo! Quod veniam sapiente quam dolorem eaque aspernatur velit
			quis delectus temporibus provident!
		</p>
		<MonetInline {...args} />
		<p class="text-base max-w-prose my-2">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum placeat ea totam inventore
			maxime molestias quisquam nobis quo! Quod veniam sapiente quam dolorem eaque aspernatur velit
			quis delectus temporibus provident!
		</p>
	</div>
</Template>

<Story name="Ad" args={{ type: 'ad', ...defaults.getProps('ad') }} />
<Story name="Subscription" args={{ type: 'sub', ...defaults.getProps('sub') }} />
<Story name="WebMonetization" args={{ type: 'webmon', ...defaults.getProps('webmon') }} />
