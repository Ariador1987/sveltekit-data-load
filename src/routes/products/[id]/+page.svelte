<script lang="ts">
	import type { PageData } from "./$types";
	import { formatCurrency } from "../../../actions";
	import { isActivatedByHover } from "../../../stores";

	export let data: PageData;

	$: ({ product } = data);
	$: ({ category, rating, price, title, description, id, images } = product);
</script>

<article class="grid place-items-center">
	<div class="card max-w-xl bg-base-100 shadow-xl text-white">
		<figure class="pt-10">
			<img
				src={images?.at(0) ?? ""}
				alt={title ?? ""}
			/>
		</figure>
		<div class="card-body">
			<div class="flex justify-between pb-2">
				<div class="rating">
					{#each { length: Math.round(rating) } as _}
						<input
							type="radio"
							name="rating-2"
							class="mask mask-star-2 bg-orange-400 cursor-default"
							disabled
						/>
					{/each}
				</div>
				<small
					class="badge badge-primary py-2 text-base font-semibold"
					use:formatCurrency>{price}</small
				>
			</div>
			<div class="flex justify-between align-center">
				<h2 class="card-title">
					{title}
				</h2>
				<div class="badge badge-secondary">{category}</div>
			</div>
			<p class="text-base">{description}</p>
			<div class="card-actions">
				<a
					on:click|preventDefault
					data-sveltekit-preload-data="hover"
					href="/products/{id}"
					class="btn btn-primary">Buy Now</a
				>
				<a
					on:mouseenter={() => ($isActivatedByHover = true)}
					data-sveltekit-preload-data="hover"
					href="/products"
					class="btn btn-ghost ring-2 font-bold"
					>Back to all Products</a
				>
			</div>
		</div>
	</div>
</article>

