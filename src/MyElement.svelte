<script lang="ts">
  import "./assets/global.css";

  import logo from "./assets/svelte.png";
  import Counter from "./components/Counter.svelte";

  export let name = "TypeScript";
</script>

<main>
  <img src={logo} alt="Svelte Logo" class="mx-auto" />
  <h1>Hello {name}!</h1>

  <Counter />

  <p>
    Visit <a class="text-blue-600 underline" href="https://svelte.dev"
      >svelte.dev</a
    > to learn how to build Svelte apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style style lang="postcss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    @apply text-center;
    @apply p-4;
    @apply mx-auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    @apply text-red-600;
    @apply uppercase;
    @apply text-6xl;
    @apply font-thin;
    @apply leading-tight;
    @apply my-8 mx-auto;
    @apply max-w-xs;
  }

  p {
    @apply max-w-xs;
    margin: 1rem auto;
    @apply leading-snug;
  }

  @screen sm {
    h1 {
      @apply max-w-none;
    }

    p {
      @apply max-w-none;
    }
  }
</style>
