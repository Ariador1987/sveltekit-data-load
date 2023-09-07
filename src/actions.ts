export function formatCurrency(node: HTMLElement) {
	const formatCurrency = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});

	if (
		node.textContent &&
		Number.isFinite(Number.parseInt(node.textContent))
	) {
		node.textContent = formatCurrency.format(+node.textContent);
	}
}
