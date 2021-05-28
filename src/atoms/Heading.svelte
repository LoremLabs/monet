<script>
	export let heading1 = "Heading line 1";
	export let heading2 = "Heading line 2";

	export let color1 = "";
	export let color2 = "";

</script>

<h2 class="font-extrabold xl:text-3xl md:text-2xl text-xl tracking-tight m-0 mb-1">
	<span class="block leading-tight mb-0.5 {color1}">{heading1}</span>
	<span class="block leading-tight {color2}">{heading2}</span>
</h2>
