export type BillingInterval = 'day' | 'week' | 'month' | 'year';

function formatPrice(price: number): string {
	// Round to two decimal places first
	const roundedPrice = Math.floor(price * 100) / 100;
  
	// If the price is a whole number, return it without decimal places
	return roundedPrice % 1 === 0 ? `$${roundedPrice.toFixed(0)}` : `$${roundedPrice.toFixed(2)}`;
}

function getBillingFrequency(interval: BillingInterval, intervalCount: number): string {
	if (intervalCount === 1) {
		switch (interval) {
			case 'day': return 'daily';
			case 'week': return 'weekly';
			case 'month': return 'monthly';
			case 'year': return 'annually';
		}
	}
  
	// Handle plural intervals
	switch (interval) {
		case 'day':
			return `every ${intervalCount} days`;
		case 'week':
			return `every ${intervalCount} weeks`;
		case 'month':
			return intervalCount === 3 ? 'quarterly' : `every ${intervalCount} months`;
		case 'year':
			return `every ${intervalCount} years`;
	}
}

export function generateStripeNickname(price: number, interval: BillingInterval, intervalCount: number): { perMonthPrice: string; formattedPrice: string; interval: BillingInterval; billingFrequency: string; } {
	// Calculate per-month price
	let perMonthPrice: number;
	switch (interval) {
		case 'day':
			perMonthPrice = price;
			break;
		case 'week':
			perMonthPrice = price;
			break;
		case 'month':
			perMonthPrice = intervalCount === 3 ? price / 3 : price;
			break;
		case 'year':
			perMonthPrice = price / 12;
			break;
	}
  
	const billingFrequency = getBillingFrequency(interval, intervalCount);
	const suffix = (interval === 'month' || interval === 'year') ? '/mo' : `/${interval}`;

	const formattedPrice = `${suffix} billed ${billingFrequency}`;
  
	return {
		perMonthPrice: formatPrice(perMonthPrice),
		formattedPrice,
		interval,
		billingFrequency,
	};
}
