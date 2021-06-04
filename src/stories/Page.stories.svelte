<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Page from './Page.svelte';
</script>

<Meta title="Monet/Page" component={Page} argTypes={{}} />

<Template let:args>
	<Page {...args} />
</Template>

<Story
	name="SiteSubscriber"
	args={{
		subscriber: {},
	}}
/>

<Story
	name="WebMonetizationUser"
	args={{
		webmon: {
			state: 'started',
		},
	}}
/>

<Story name="Anonymous" args={{}} />
