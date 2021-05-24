<script lang="ts">
	import "../assets/global.css";
	import Cta from "../atoms/Cta.svelte";

	export let direction: "left" | "right" = "left";

</script>

<div class="bg-black w-98 h-6 rounded-t-3xl" />
<div class="font-sans shadow-2xl rounded-3xl rounded-tl-none">
	<div class="inline-flex gap-6 py-10 pl-10">
		<div>
			<h2 class="text-3xl font-extrabold sm:text-4xl m-0 mb-1 tracking-tighter">
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
			<p class="inline-flex my-1">
				<a href="#learn-more" class="text-black font-semibold underline"
					>Learn More <span aria-hidden="true">&rarr;</span></a
				>
			</p>
		</div>
		<div class="self-center flex-shrink-0">
			<Cta {direction} />
		</div>
	</div>
</div>

<style style lang="postcss">
	.w-98 {
		width: 98%;
	}

</style>
