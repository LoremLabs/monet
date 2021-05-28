<script lang="ts">
	export let animate = false;

</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 128 128"
	{...$$restProps} class:animate class:fill-current={true}
>
	<path
		d="M64 124C30.9 124 4 97.1 4 64S30.9 4 64 4s60 26.9 60 60-26.9 60-60 60zm0-114c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54z"
	/>
	<path
		d="M56.4 76.3c0-1.8-.6-3.3-1.7-4.5-1.1-1.2-3-2.3-5.6-3.2-2.6-1-4.7-1.9-6.1-2.7-4.8-2.7-7.3-6.7-7.3-11.9 0-3.6 1-6.5 3.1-8.8 2.1-2.3 4.3-3.6 7.9-4V34h5.6v7.1c3.6.5 6.4 2.1 8.4 4.8 2 2.6 3 6 3 10.2h-7.5c0-2.7-.6-4.8-1.8-6.4a5.7 5.7 0 00-4.8-2.4c-2 0-3.6.6-4.7 1.7s-1.7 2.7-1.7 4.8c0 1.9.6 3.4 1.7 4.5s3 2.2 5.7 3.2 4.8 1.9 6.3 2.8c1.5.9 2.8 1.8 3.8 3 1 1.1 1.8 2.4 2.4 3.8.6 1.4.8 3.1.8 5.1 0 3.6-1.1 6.6-3.2 8.8-2.1 2.3-4.7 3.6-8.6 4v5h-5.4v-5c-4.1-.5-7.3-2-9.5-4.6-2.2-2.6-3.3-6-3.3-10.2h7.6c0 2.7.7 4.8 2 6.3s3.2 2.2 5.6 2.2c2.4 0 4.2-.6 5.4-1.8 1.3-1.1 1.9-2.7 1.9-4.6z"
	/>
	<rect
		class:animate-wm-blink={animate}
		style="animation-delay: 300ms;"
		x="94"
		y="49"
		width="5"
		height="35"
	/>
	<rect
		class:animate-wm-blink={animate}
		style="animation-delay: 200ms;"
		x="84"
		y="54"
		width="5"
		height="25"
	/>
	<rect
		class:animate-wm-blink={animate}
		style="animation-delay: 100ms;"
		x="74"
		y="59"
		width="5"
		height="15"
	/>
</svg>
