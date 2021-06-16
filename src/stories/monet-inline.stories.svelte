<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import MonetInline from './monet-inline.svelte';
</script>

<Meta title="monet-inline" component={MonetInline} argTypes={{}} />

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
