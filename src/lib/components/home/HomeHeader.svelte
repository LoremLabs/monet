<script context="module">
	const title = 'Open Source Design Components for Gated Content';
	const body = `Web monetization empowers creators, journalists and artists with new revenue possibilities. These responsive, customizable components can be easily added to your site. Explore our growing, collaborative collection of design components for gating content on the web.`;
</script>

<div
	class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden rounded-tl-3xl rounded-tr-3xl"
>
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:gap-8">
			<div
				class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
			>
				<div class="lg:py-24">
					<h1
						class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
					>
						{title}
					</h1>
					<p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
						{body}
					</p>
					<div class="mt-10 sm:mt-12">
						<form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
							<div class="sm:flex">
								<div class="min-w-0 flex-1">
									<label for="email" class="sr-only">Email address</label>
									<input
										id="email"
										type="email"
										placeholder="npm install monet"
										class="block w-full px-4 py-3 bg-theme-50 rounded-md border-0 text-base text-theme-800 placeholder-theme-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-300 focus:ring-offset-gray-900"
									/>
								</div>
								<div class="mt-3 sm:mt-0 sm:ml-3">
									<button
										type="submit"
										class="block w-full py-3 px-4 rounded-md shadow bg-theme-500 text-white font-medium hover:bg-theme-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-300 focus:ring-offset-gray-900"
										>Try it out</button
									>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
				<div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
					<img
						class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
						src="/svg/home.svg"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</div>
