import { FC, Fragment, useMemo } from 'react';

// import { DiscountReturnType } from '../api/types';
import { useCheckoutStore } from '@/store/checkoutStore';

interface ITotalCalc {
//   productPrice: number;
//   membershipPrice: number;
//   discount: DiscountReturnType | null;
//   setTotalPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export const TotalCalc: FC<ITotalCalc> = ({
	// productPrice,
	// membershipPrice,
	// discount,
	// setTotalPrice,
}) => {

	const { selectedProductPrice, discount, setTotalPrice } = useCheckoutStore();

	const total = useMemo(
		() => (selectedProductPrice?.price ?? 0).toFixed(2),
		[selectedProductPrice]
	);

	const calculateDiscountAmount = () => {
		if (discount?.percent_off) {
			return ((selectedProductPrice?.price ?? 0) * discount.percent_off) / 100;
		}
		if (discount?.amount_off) {
			const amountOffDollars = discount.amount_off / 100;
			return Math.min(amountOffDollars, selectedProductPrice?.price ?? 0);
		}
		return 0;
	};

	const totalDiscount = useMemo(() => {
		if (discount?.id) {
			const discountAmount = calculateDiscountAmount();
			return discountAmount.toFixed(2);
		}
		return 0;
	}, [discount, selectedProductPrice]);

	const totalDue = useMemo(() => {
		if (discount?.id) {
			const discountAmount = calculateDiscountAmount();
			const due = ((selectedProductPrice?.price ?? 0) - discountAmount).toFixed(2);
			setTotalPrice(Number(due));
			return due;
		}
		setTotalPrice(Number(total));
		return total;
	}, [total, discount]);

	const calculateEffectivePercentage = (discountAmount: number, price: number) => {
		return ((discountAmount / price) * 100).toFixed(2);
	};

	const displayPercentage = useMemo(() => {
		if (discount?.id) {
			if (discount.percent_off) {
				return discount.percent_off;
			} else if (discount.amount_off) {
				const discountAmount = calculateDiscountAmount();
				return calculateEffectivePercentage(discountAmount, selectedProductPrice?.price ?? 0);
			}
		}
		return '0.00';
	}, [discount, selectedProductPrice]);

	return (
		<div className='flex justify-between py-12'>
			<div className='flex flex-col'>
				<p className='text-grey-primary text-sm'>Total</p>
				{ discount?.id && (
					<p className='text-grey-primary py-6 text-sm'>
            Coupon - { displayPercentage }%
					</p>
				) }
				<p className='text-white text-lg py-6'>Total due</p>
			</div>
			<div className='flex flex-col text-right'>
				<p className='text-grey-primary text-sm'>${ total }</p>
				{ discount?.id && (
					<p className='text-grey-primary py-6 text-sm'>
						<Fragment>
							-${ totalDiscount }
						</Fragment>
					</p>
				) }
				<p className='text-white text-lg py-6'>${ totalDue }</p>
			</div>
		</div>
	);
};