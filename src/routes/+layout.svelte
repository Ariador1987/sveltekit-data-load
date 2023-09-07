<script>
	import "../app.postcss";
	import { page } from "$app/stores";
	import { isActivatedByHover } from "../stores";
</script>

<svelte:head>
	<title>{$page?.data?.title ?? "Welcome to this demo"}</title>
	<link
		rel="icon"
		href="https://fav.farm/🔥"
	/>
</svelte:head>

<nav class="bg-gray-800 text-white py-2 px-4 h-16 fixed inset-0 z-50">
	<ul class="max-w-7xl h-full m-auto flex items-center space-x-4 text-2xl">
		<li>
			<a
				data-sveltekit-preload-data="hover"
				href="/">Home</a
			>
		</li>
		<li>
			<a
				on:mouseenter={() => {
					$isActivatedByHover = true;
				}}
				data-sveltekit-preload-data="hover"
				href="/products">Products</a
			>
		</li>
	</ul>
</nav>

<main class="text-xl pt-24 px-12 pb-12 bg-gray-200 min-h-full">
	<div class="max-w-6xl m-auto">
		<slot />
	</div>
</main>