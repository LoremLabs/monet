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
		heading1: { defaultValue: defaults.heading1, control: { type: 'text' } },
		heading2: { defaultValue: defaults.heading2, control: { type: 'text' } },
		subtitle: { defaultValue: defaults.subtitle, control: { type: 'text' } },
		body: { defaultValue: defaults.body, control: { type: 'text' } },
		ctaText: { defaultValue: defaults.ctaText, control: { type: 'text' } },
		href: { defaultValue: defaults.href, control: { type: 'text' } },
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

<Story name="Base" args={{}} />
