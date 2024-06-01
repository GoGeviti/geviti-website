import { FC } from "react";
import TextField from "../TextField";
import { FormikProps, useFormik } from "formik";

type DiscountFormProps = {
  submitCoupon: (code?: string) => void;
  discountApplied: boolean;
  loading: boolean;
};
const DiscountForm: FC<DiscountFormProps> = ({ submitCoupon, discountApplied = false, loading }) => {
  const formik: FormikProps<{ coupon_code: string }> = useFormik({
    initialValues: {
      coupon_code: "",
    },
    onSubmit: (form) => {
      submitCoupon(form.coupon_code);
    },
  });

  return (
    <form
      className='relative'
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
      <label htmlFor='coupon_code' className='text-grey-50 text-lg !leading-normal max-lg:font-medium'>
        Coupon Discount
      </label>

      <TextField
        className='mt-6'
        id='coupon_code'
        type='text'
        name='coupon_code'
        placeholder='Coupon Discount'
        value={formik.values.coupon_code}
        onChange={formik.handleChange}
        disabled={loading}
      />
      <div className='absolute w-4 h-4 lg:w-6 lg:h-6 right-[22px] bottom-[22px] lg:bottom-[18px]'>
        {discountApplied && <GreenCircleTick />}
      </div>
    </form>
  );
};

function GreenCircleTick() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
      <path
        d='M12 2.5C6.49 2.5 2 6.99 2 12.5C2 18.01 6.49 22.5 12 22.5C17.51 22.5 22 18.01 22 12.5C22 6.99 17.51 2.5 12 2.5ZM16.78 10.2L11.11 15.87C10.97 16.01 10.78 16.09 10.58 16.09C10.38 16.09 10.19 16.01 10.05 15.87L7.22 13.04C6.93 12.75 6.93 12.27 7.22 11.98C7.51 11.69 7.99 11.69 8.28 11.98L10.58 14.28L15.72 9.14C16.01 8.85 16.49 8.85 16.78 9.14C17.07 9.43 17.07 9.9 16.78 10.2Z'
        fill='#1AAE64'
      />
    </svg>
  );
}

export default DiscountForm;
