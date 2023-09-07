import { error, redirect } from "@sveltejs/kit";
import type { PageLoad, PageLoadEvent } from "../$types";
import type { Product } from "../../../types";

export const load = (async (event: PageLoadEvent) => {
	const { params, route, url, fetch, data, parent } = event;
	// console.log(params, " params");
	// console.log(route, " route");
	// console.log(url, " url");
	// console.log(data, " data"); -> we get data from +page.server.js/ts
	// console.log(await parent(), " parent")
	console.log("Single product load ran for single product...");

	if (!params.id) {
		throw error(400, "Something went wrong");
	}

	const res = await fetch(`https://dummyjson.com/products/${params.id}`);
	if (!res.ok) {
		throw error(400, "Something went wrong");
	}

	const product = (await res.json()) as Product;
	console.log(
		`Single product load ended for product %c ${product.title} `,
		"background: linear-gradient(to right, #009FFF, #ec2F4B); color: #fff; font-weight: 700",
	);

	if (product.id === 1) {
		const parts = url.pathname.split("/");

		if (parts.at(-1)) {
			let lastPart = Number.parseInt(parts[parts.length - 1]);
			++lastPart;
			params.id = lastPart.toString();
			parts.splice(-1, 1, lastPart.toString()).join("/");
		}
		setTimeout(
			() =>
				console.error("iPhone 9 is a superstar and noone can see him"),
			0,
		);
		throw redirect(301, `${parts.join("/")}`);
	}

	return {
		product,
		title: product.title,
	};
}) satisfies PageLoad;
