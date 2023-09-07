import type { Product } from "../../types";
import type { PageLoad } from "./$types";
import { Invalidators } from "../../invalidators";
import { isActivatedByFetch, isActivatedByHover } from "../../stores";
import { get } from "svelte/store";

export const load = (async ({ depends, fetch }) => {
	console.log(
		`Products load function rerun start using ${
			get(isActivatedByHover)
				? "hover preload"
				: get(isActivatedByFetch)
				? "fetch"
				: "depends"
		}`,
	);
	depends(Invalidators.Products);
	const res = await fetch("/api/products");
	const data = await res.json();
	// Type-ovi se mogu također deklarirati unutar _app.d.ts_ PageData interface-a
	// ako ih ne vraćamo u _svakoj_ load funkciji stavimo da je opcionalan (?)
	// ovo nam nudi typeSafety unutar samog returna dolje.
	const { products }: { products: Array<Product> } = data;
	console.log(
		`Products load function rerun end using ${
			get(isActivatedByHover)
				? "hover preload"
				: get(isActivatedByFetch)
				? "fetch"
				: "depends"
		}`,
	);
	isActivatedByFetch.set(false);
	isActivatedByHover.set(false);
	return {
		products,
		// passing data to svelte:head (passing data to parent example)
		title: "Product page",
	};
}) satisfies PageLoad;
