import { json, type RequestHandler } from "@sveltejs/kit";

export const GET = async (event: RequestHandler) => {
	const data = await (await import("$lib/dummy-products.json")).default;

	// can also use return new Response(...), this is one of the helper functions used below
	return json(data, { status: 200 });
};

/*
    We can have other HTTP Verbs for these endpoints, but theres a better way that
    works without JavaScript... (+page.server.js/ts) form actions
*/
