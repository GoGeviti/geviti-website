import { FC, Fragment, useMemo } from 'react';

import { DiscountReturnType, PROMO_TYPE } from '../api/types';

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

	const totalDue = useMemo(() => {
		if (discount?.coupon_exist) {
			const due = (membershipPrice + discount.coupon_details.discounted_price).toFixed(2);
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
				{ discount?.coupon_exist && (
					<p className='text-grey-primary py-6 text-sm'>
            Coupon - { discount.coupon_details.keyword }
					</p>
				) }
				<p className='text-white text-lg py-6'>Total due</p>
			</div>
			<div className='flex flex-col text-right'>
				<p className='text-grey-primary text-sm'>${ total }</p>
				{ discount?.coupon_exist && (
					<p className='text-grey-primary py-6 text-sm'>
						{ discount?.coupon_details.promo_type === PROMO_TYPE.AMOUNT_OFF ? (
							<Fragment>
								-${ discount.coupon_details.amount_off }
							</Fragment>
						) : (
							<Fragment>
								-{ discount.coupon_details.amount_off }%
							</Fragment>
						) }
					</p>
				) }
				<p className='text-white text-lg py-6'>${ totalDue }</p>
			</div>
		</div>
	);
};