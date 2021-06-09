<script>
	export let name = '';
	export let title = '';
</script>

<header
	class="inline-flex flex-col gap-1 items-baseline focus-within:ring-2 focus-within:ring-theme-500"
	id={name}
>
	<h2 class="font-extrabold text-4xl">
		<a class="focus:outline-none" href="#/{name}">{title}</a>
	</h2>
	<p class="font-semibold font-mono text-lg text-theme-600" aria-hidden="true">
		{`<${name}>`}
	</p>
</header>
