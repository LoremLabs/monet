<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import ModalBase from "./ModalBase.svelte";

	const demo_modalBackgroundClasslist =
		"relative bg-gray-600/60 w-screen h-screen max-w-full max-h-full";

</script>

<Meta
	title="Components/Modal"
	component={ModalBase}
	parameters={{
		layout: "fullscreen",
	}}
	argTypes={{
		theme: {
			control: {
				type: "inline-radio",
				options: ["light", "dark", "accent"],
			},
		},
		variant: {
			control: {
				type: "inline-radio",
				options: ["center", "bottom"],
			},
		},
	}}
/>

<Template let:args>
	<div class="p-8 outline-black box-border m-4">
		<ModalBase {...args} />
	</div>
</Template>

<Template let:args id="Bottom">
	<div class={demo_modalBackgroundClasslist}>
		<div class="fixed bottom-0 left-0 right-0">
			<ModalBase {...args} />
		</div>
	</div>
</Template>

<Template let:args id="Center">
	<div class={demo_modalBackgroundClasslist}>
		<div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<ModalBase {...args} />
		</div>
	</div>
</Template>

<Story name="Base" args={{}} />

<Story
	name="Center"
	template="Center"
	args={{
		variant: "center",
		ctaText: "Purchase",
	}}
/>

<Story
	name="Bottom"
	template="Bottom"
	args={{
		variant: "bottom",
		ctaText: "Purchase from Provider",
	}}
/>
