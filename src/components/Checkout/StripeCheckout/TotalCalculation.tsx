import { FC, Fragment, useMemo } from 'react';

import { DiscountReturnType } from '../api/types';

interface ITotalCalc {
  productPrice: number;
  membershipPrice: number;
  discount: DiscountReturnType | null;
  setTotalPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export const TotalCalc: FC<ITotalCalc> = ({
	productPrice,
	membershipPrice,
	discount,
	setTotalPrice,
}) => {
	const total = useMemo(
		() => (productPrice + membershipPrice).toFixed(2),
		[productPrice, membershipPrice]
	);

	const totalDiscount = useMemo(() => {
		if (discount?.id) {
			const discountAmount = (membershipPrice * discount.percent_off) / 100;
			return discountAmount.toFixed(2);
		}
		return 0;
	}, [discount]);

	const totalDue = useMemo(() => {
		if (discount?.id) {
			const discountAmount = (membershipPrice * discount.percent_off) / 100;
			const due = ((membershipPrice + productPrice) - discountAmount).toFixed(2);
			setTotalPrice(Number(due));
			return due;
		}
		setTotalPrice(Number(total));
		return total;
	}, [total, discount]);

	return (
		<div className='flex justify-between py-12'>
			<div className='flex flex-col'>
				<p className='text-grey-primary text-sm'>Total</p>
				{ discount?.id && (
					<p className='text-grey-primary py-6 text-sm'>
            Coupon - { discount.percent_off }%
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