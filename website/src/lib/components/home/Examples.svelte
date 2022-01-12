<script>
	import Example from './Example.svelte';
</script>

<Example
	name="monet-inline"
	title="Inline Monetizer"
	imageUrl="/img/inline.png"
	align="left"
	backgroundImageUrl="/svg/gradient-odd.svg"
	class="bg-center"
>
	<svelte:fragment slot="description">
		This design component prompts users while reading an article.
	</svelte:fragment>
</Example>

<Example
	name="monet-riser"
	title="Riser"
	imageUrl="/img/riser.png"
	align="center"
	backgroundImageUrl="/svg/gradient-circle-blue.svg"
	class="bg-bottom"
>
	<svelte:fragment slot="description">
		This component, at the bottom of your page, encourages users to enable web monetization.
	</svelte:fragment>
</Example>

<Example
	name="monet-modal"
	title="Modal"
	imageUrl="/img/modal.png"
	align="right"
	backgroundImageUrl="/svg/gradient-circle-orange.svg"
	class="bg-right"
>
	<svelte:fragment slot="description">
		To temporarily block access to a piece of content, this Modal prompt directs users to activate
		Web Monetization before continuing.
	</svelte:fragment>
</Example>

<Example
	name="monet-if"
	title="Monetization If Block"
	imageUrl="/img/modal.png"
	align="left"
	backgroundImageUrl="/svg/gradient-circle-blue.svg"
	class="bg-right"
>
	<svelte:fragment slot="description">
		Build premium content by choosing to show or hide based on a user's monetization status.
	</svelte:fragment>
</Example>
