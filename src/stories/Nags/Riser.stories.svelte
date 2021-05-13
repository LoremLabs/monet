<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Riser from "./Riser.svelte";
</script>

<Meta
  title="Monet/Nags/Riser"
  component={Riser}
  argTypes={{
  }}
/>

<Template let:args>
  <Riser
    {...args}
    />
</Template>

<Story
  name="Nags/Riser"
  args={{
    subscriber: {

    },
  }}
/>

