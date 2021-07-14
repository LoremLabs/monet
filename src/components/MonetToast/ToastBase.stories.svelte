<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import MonetToast from "./ToastBase.svelte";
</script>

<Meta title="Components/MonetToast" component={MonetToast} argTypes={{}} />

<Template let:args>
	<div class="relative h-44 outline-black overflow-hidden">
		<div class="absolute bottom-0 left-0">
			<MonetToast {...args} />
		</div>
	</div>
</Template>

<Story name="Primary" args={{ collapsed: false }} />
