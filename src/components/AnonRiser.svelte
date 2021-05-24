<script lang="ts">
	import "../assets/global.css";
	import WebMonetizationLogo from "../assets/WebMonetizationLogo.svelte";

</script>

<div class="bg-black w-98 h-6 rounded-t-3xl" />
<div class="bg-white font-sans shadow-xl-all rounded-3xl rounded-tl-none">
	<div class="inline-flex gap-6 py-10">
		<div class="pl-10">
			<h2
				class="font-extrabold xl:text-3xl md:text-2xl text-xl m-0 mb-1 tracking-tighter"
			>
				<span class="block text-black">Want to unlock the article?</span>
				<span class="block text-wm-green"
					>Purchase a Web Monetization pass now!</span
				>
			</h2>
			<p class="text-gray-700 my-1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
				consequatur autem minus ex, dignissimos deleniti ipsum, neque saepe,
				obcaecati hic dolorem. Laudantium eos ullam dolore.
			</p>
			<p class="text-black font-semibold underline">
				Learn More <span aria-hidden="true">&rarr;</span>
			</p>
		</div>
		<div class="self-center flex-shrink-0">
			<div
				class="inline-flex gap-3 items-center p-2 md:p-5 xl:p-6 text-white bg-wm-green rounded-l-3xl"
			>
				<span class="h-8 w-8"><WebMonetizationLogo /></span>
				<span class="font-sans">Purchase from Provider</span>
			</div>
		</div>
	</div>
</div>
