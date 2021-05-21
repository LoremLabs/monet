<script lang="ts">
  import "../assets/global.css"

  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>

<style style lang="postcss">
  button {
    font-family: inherit;
    font-size: inherit;
    /* Using Tailwind classes directly on your HTML elements is recommended over @apply. */
		@apply py-4 px-8;
    @apply text-red-900;
    @apply bg-red-500 bg-opacity-10;
    @apply rounded-full;
    @apply border-2 border-transparent;
    @apply outline-none;
    @apply w-48;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    @apply border-opacity-100;
  }

  button:active {
    @apply bg-red-500 bg-opacity-20;
  }
</style>
