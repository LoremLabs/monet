<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import InlineNag from "./InlineNag.svelte";
</script>

<Meta
	title="Components/InlineNag"
	component={InlineNag}
	argTypes={{
		theme: {
			control: {
				type: "inline-radio",
				options: ["light", "dark", "dim"],
			},
		},
	}}
/>

<Template let:args>
	<InlineNag {...args} />
</Template>

<Template let:args id="InlineBlock">
	<div class="outline-black max-w-prose-78 p-4">
		<p class="font-sans text-base">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita
			quam eaque ipsum numquam perspiciatis ducimus nam, quibusdam fugit et id
			nemo non quis similique, blanditiis aperiam totam qui nostrum?
		</p>
		<InlineNag {...args} />
		<p class="font-sans text-base">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
			nulla veritatis odio, quo nobis aliquid perferendis vel ut dolores labore
			ullam mollitia quis, iste et? Magni ipsa similique blanditiis numquam?
		</p>
	</div>
</Template>

<Story name="Light" args={{ subtitle: "" }} />
<Story name="Dark" args={{ theme: "dark", subtitle: "" }} />
<Story name="Dimmed" args={{ theme: "dim", subtitle: "" }} />
<Story name="With subtitle" args={{ theme: "dark", heading1: "" }} />
<Story
	name="Inline block"
	template="InlineBlock"
	args={{ subtitle: "", theme: "dark" }}
/>
