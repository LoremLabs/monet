<script context="module">
	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}
</script>

<script>
	export let legend = '';
	export let name = '';
	export let options = [];
	export let vertical = false;

	export let selected;
	$: selectedIndex = options.findIndex(([value]) => value === selected);
</script>

<fieldset>
	<legend class="font-semibold text-gray-700 text-xl mb-2">{legend}</legend>
	<div class="flex flex-wrap relative {vertical ? 'flex-col' : 'gap-2'}">
		{#each options as [value, label, description], idx}
			<div
				class={classNames(
					'border-gray-200 border p-4 flex gap-2 cursor-pointer relative',
					!description ? 'items-center' : '',
					selectedIndex === idx ? 'bg-theme-50 border-theme-200 z-10' : 'border-gray-200',
					vertical && idx === 0 ? 'rounded-t-md' : '',
					vertical && idx === options.length - 1 ? 'rounded-b-md' : '',
					!vertical ? 'rounded-md' : '',
				)}
			>
				<input
					type="radio"
					bind:group={selected}
					{name}
					id="{name}_opt{idx}"
					class="h-4 w-4 text-theme-600 focus:ring-theme-500 {description ? 'mt-2' : ''}"
					{value}
				/>
				<div class="flex flex-col">
					<label
						class={classNames(
							'block cursor-pointer font-medium',
							selectedIndex === idx ? 'text-theme-900' : 'text-gray-900',
						)}
						for="{name}_opt{idx}">{label}</label
					>
					{#if description}
						<span
							class={classNames(
								'block text-sm',
								selectedIndex === idx ? 'text-theme-700' : 'text-gray-500',
							)}
						>
							{description}
						</span>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</fieldset>

<style>
	label::after {
		content: '';
		@apply inset-0;
		@apply absolute;
	}
</style>
