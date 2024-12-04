export type BillingInterval = 'day' | 'week' | 'month' | 'year';

function formatPrice(price: number): string {
	// Round to two decimal places first
	const roundedPrice = Math.floor(price * 100) / 100;
  
	// If the price is a whole number, return it without decimal places
	// return roundedPrice % 1 === 0 ? `$${roundedPrice.toFixed(0)}` : `$${roundedPrice.toFixed(2)}`;
	return `$${roundedPrice.toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})}`;
}

function formatPrice2(price: number): string {
	// Round to two decimal places first
	// const roundedPrice = Math.floor(price * 100) / 100;
  
	// If the price is a whole number, return it without decimal places
	return `$${price.toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})}`;
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

export function generateStripeNickname(price: number, interval: BillingInterval, intervalCount: number): {
	suffix: string;
	perMonthPrice: string;
	formattedPrice: string;
	interval: BillingInterval;
	billingFrequency: string;
} {
	// Calculate per-month price
	let perMonthPrice: number;
	let firstPart: string;
	let lastPart: string;
	switch (interval) {
		case 'day':
			perMonthPrice = price;
			firstPart = 'Daily';
			lastPart = 'day';
			break;
		case 'week':
			perMonthPrice = price;
			firstPart = 'Weekly';
			lastPart = 'week';
			break;
		case 'month':
			perMonthPrice = intervalCount === 3 ? price / 3 : price;
			firstPart = intervalCount === 3 ? 'Quarterly' : 'Monthly';
			lastPart = intervalCount === 3 ? '3 months' : '1 month';
			break;
		case 'year':
			perMonthPrice = price / 12;
			firstPart = 'Annual';
			lastPart = '12 months';
			break;
	}
  
	const billingFrequency = getBillingFrequency(interval, intervalCount);
	const suffix = (interval === 'month' || interval === 'year') ? '/month' : `/${interval}`;

	const formattedPrice = `${firstPart} premium ${formatPrice2(price)} billed every ${lastPart}`;
  
	return {
		suffix,
		perMonthPrice: formatPrice(perMonthPrice),
		formattedPrice,
		interval,
		billingFrequency,
	};
}
