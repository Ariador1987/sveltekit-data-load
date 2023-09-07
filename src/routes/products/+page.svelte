<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { Invalidators } from "../../invalidators";
	import { formatCurrency } from "../../actions";
	import type { PageData } from "./$types";
	import { isActivatedByFetch } from "../../stores";

	export let data: PageData;
	$: ({ products } = data);
</script>

<section>
	<div
		class="max-w-7xl min-h-fit grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6"
	>
		{#each products.slice(0, 10) as product (product.id)}
			{@const {
				id,
				title,
				description,
				price,
				rating,
				category,
				images,
			} = product}
			<div class="card max-w-96 bg-base-100 shadow-xl text-white">
				<figure>
					<img
						class="object-cover w-full"
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
							use:formatCurrency>{price}
                        </small>
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
							data-sveltekit-preload-data="hover"
							href="/products/{id}"
							class="btn btn-primary">Buy Now</a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="w-full flex justify-center space-x-4 mt-16">
		<!-- You can access (url) in invalidate as the first argument if necessary -->
		<button
			on:click={async () => await invalidate(Invalidators.Products)}
			class="btn btn-accent min-w-fit tracking-widest flex flex-col justify-center items-center"
		>
			<span>Refetch data</span>
			<code class="font-mono text-xs font-bold tracking-tight"
				>see console.logs(invalidate using depends)</code
			>
		</button>
		<button
			on:click={async () => {
				$isActivatedByFetch = true;
				invalidate("/api/products");
			}}
			class="btn btn-accent min-w-fit tracking-widest flex flex-col justify-center items-center"
			><span>Refetch data</span>
			<code class="font-mono text-xs font-bold tracking-tight"
				>see console.logs(invalidate fetch url in load.ts)</code
			></button
		>
	</div>
</section>
