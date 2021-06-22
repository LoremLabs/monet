<script>
	export let name;
	export let title;
	export let imageUrl;
	export let backgroundImageUrl;
	/** @type {"left" | "center" | "right"} */
	export let align = 'left';
</script>

<section
	class="px-4 md:px-10 {{
		left: 'py-12',
		center: 'py-24',
		right: 'py-12',
	}[align]} bg-no-repeat bg-contain flex flex-col gap-2 {{
		left: 'md:flex-row-reverse',
		center: 'items-center',
		right: 'md:flex-row',
	}[align]} {$$props.class}"
	style="background-image: url({backgroundImageUrl});"
>
	<div class="p-5 {align !== 'center' ? 'md:mt-16' : ''}">
		<header
			class="inline-flex flex-col gap-1 items-baseline focus-within:ring-2 focus-within:ring-theme-500"
			id={name}
		>
			<h2 class="font-extrabold text-4xl">
				<a class="focus:outline-none" href="/components/{name}">{title}</a>
			</h2>
			<p class="font-semibold font-mono text-lg text-theme-600" aria-hidden="true">
				{`<${name}>`}
			</p>
		</header>
		<p class="m-0 text-lg max-w-prose text-gray-700">
			<slot name="description" />
		</p>
	</div>
	<a class="focus:outline-none md:w-2/3" tabindex="-1" href="/components/{name}">
		<img class="drop-shadow-2xl" src={imageUrl} alt="" />
	</a>
</section>
