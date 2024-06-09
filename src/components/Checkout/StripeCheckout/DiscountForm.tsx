import { ChangeEvent, FC } from 'react';
import { debounce } from 'lodash';

import { GreenCircleTick } from '@/components/Icons/GreenCircleTick';
import { Spinner } from '@/components/Icons/Spinner';

import TextField from '../TextField';

type DiscountFormProps = {
  submitCoupon: (code?: string) => void;
  discountApplied: boolean;
  loading: boolean;
	disabled: boolean;
};
const DiscountForm: FC<DiscountFormProps> = ({
	submitCoupon,
	discountApplied = false,
	loading,
	disabled,
}) => {
	const debounceSubmitCoupon = debounce(enteredCoupon => {
		submitCoupon(enteredCoupon);
	}, 800);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value) debounceSubmitCoupon(e.target.value);
	};

	return (
		<div className='relative'>
			<label
				htmlFor='coupon_code'
				className='text-grey-50 text-lg !leading-normal max-lg:font-medium'
			>
        Coupon Discount
			</label>

			<TextField
				className='mt-6'
				id='coupon_code'
				type='text'
				name='coupon_code'
				placeholder='Coupon Discount'
				onChange={ handleInputChange }
				disabled={ disabled }
			/>
			{ loading && <Spinner className='absolute w-4 h-4 lg:w-6 lg:h-6 right-[22px] bottom-[20px] lg:bottom-[18px]' /> }
			{ !loading && discountApplied && <GreenCircleTick className='absolute w-4 h-4 lg:w-6 lg:h-6 right-[22px] bottom-[20px] lg:bottom-[18px]' /> }
		</div>
	);
};

export default DiscountForm;
