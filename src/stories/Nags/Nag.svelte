<script>
  // import { createEventDispatcher } from 'svelte';

  // this is a base class for any nags, maybe just a div?

  export let webmon = null;
  export let subscriber = null;
  export let variations = '';

  // const dispatch = createEventDispatcher();

  // function onLogin(event) {
  //   dispatch('login', event);
  // }
  // function onLogout(event) {
  //   dispatch('logout', event);
  // }
  // function onCreateAccount(event) {
  //   dispatch('createAccount', event);
  // }
</script>

<aside class={variations}>
  <slot />
</aside>
