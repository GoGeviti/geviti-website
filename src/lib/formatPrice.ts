export const formatPrice = (price?: string): string => {
	if (!price) {
		price = '0';
	}

	const numericPrice = Number(price);
	if (isNaN(numericPrice)) {
		throw new Error('Invalid price value');
	}

	return `$${numericPrice.toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})}`.replace(/\.00$/, '');
};