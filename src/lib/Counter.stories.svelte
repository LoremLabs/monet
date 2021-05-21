<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Counter from "./Counter.svelte";

</script>

<Meta title="Atoms/Counter" component={Counter} argTypes={{}} />

<Template let:args>
  <Counter {...args} />
</Template>

<Story name="Primary" args={{}} />
