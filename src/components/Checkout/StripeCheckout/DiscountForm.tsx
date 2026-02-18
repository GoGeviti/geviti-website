/* eslint-disable no-unused-vars */
import { FC,  useCallback,  useState } from 'react';
import debounce from 'lodash/debounce';

import { GreenCircleTick } from '@/components/Icons/GreenCircleTick';
import { Spinner } from '@/components/Icons/Spinner';
import { useCheckoutStore } from '@/store/checkoutStore';

import TextField from '../TextField';

type DiscountFormProps = {
	submitCoupon: (code?: string) => void;
	// discountApplied: boolean;
	// loading: boolean;
	// disabled: boolean;
};
const DiscountForm: FC<DiscountFormProps> = ({
	submitCoupon,
	// discountApplied = false,
	// loading,
	// disabled,
}) => {

	const { couponLoading: loading, discountApplied, promoCode, setPromoCode } = useCheckoutStore();

	// const [inputValue, setInputValue] = useState('');
	const [prevValue, setPrevValue] = useState('');
	
	const debounceSubmitCoupon = useCallback(
		debounce(enteredCoupon => {
			submitCoupon(enteredCoupon);
		}, 2000),
		[]
	);

	// const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
	// 	if (e.target.value) debounceSubmitCoupon(e.target.value);
	// };

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		setPromoCode(newValue);
		// Call debounceSubmitCoupon only if the new value is different from the previous value
		if (newValue !== prevValue) {
			setPrevValue(newValue);
			debounceSubmitCoupon(newValue);
		}
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
				value={ promoCode }
				className='mt-6'
				id='coupon_code'
				type='text'
				name='coupon_code'
				placeholder='Coupon Discount'
				onChange={ handleInputChange }
				disabled={ loading }
			/>
			{ loading && <Spinner className='absolute w-4 h-4 lg:w-6 lg:h-6 right-[22px] bottom-[20px] lg:bottom-[18px]' /> }
			{ !loading && discountApplied && <GreenCircleTick className='absolute w-4 h-4 lg:w-6 lg:h-6 right-[22px] bottom-[20px] lg:bottom-[18px]' /> }
		</div>
	);
};

export default DiscountForm;
