'use client';

import React, {
	FC, Fragment, useCallback, useEffect, useMemo, useState
} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import MicroscopeIcon from '@/components/Icons/MicroscopeIcon';
import TagUserIcon from '@/components/Icons/TagUserIcon';

import {
	checkout,
	getDiscount,
	getInitialOfferings,
	getMembershipOfferings,
} from '../api/onboarding';
import {
	DiscountReturnType,
	InitialOfferingsReturnType,
	MembershipOfferingsReturnType,
	PROMO_TYPE,
	TempUser,
} from '../api/types';

import CheckoutItem from './CheckoutItem';
import DiscountForm from './DiscountForm';
import PageHeader from './PageHeader';
import StripeElementsProvider from './StripeElementsProvider';

type PageProps = {
	searchParams: { [key: string]: string | string[] | undefined; };
};
// TODO: make membership plans completely dynamic
const StripeCheckout: FC<PageProps> = ({ searchParams }) => {
	// const searchParams = useSearchParams();
	const router = useRouter();
	const productId = searchParams?.product;
	const membershipId = searchParams?.membership;

	const [loading, setLoading] = useState(false);
	const [couponLoading, setCouponLoading] = useState(false);
	const [productLoading, setProductLoading] = useState(false);
	const [membershipLoading, setMembershipLoading] = useState(false);
	const [checkoutLoading, setCheckoutLoading] = useState(false);
	const [tempUser, setTempUser] = useState<TempUser>();
	const [product, setProduct] = useState<InitialOfferingsReturnType>();
	const [membership, setMembership] = useState<MembershipOfferingsReturnType>();
	const [discount, setDiscount] = useState<DiscountReturnType | null>(null);
	const [totalPrice, setTotalPrice] = useState<number>();
	const [discountApplied, setDiscountApplied] = useState(false);

	useEffect(() => {
		setProductLoading(true);
		setMembershipLoading(true);
		const user = sessionStorage.getItem('temp_user');
		if (!user) {
			router.replace('/onboarding');
			return;
		}
		setTempUser(JSON.parse(user));
		const getOfferings = async() => {
			setLoading(true);
			const offerings = await getInitialOfferings();
			const memberShipOfferings = await getMembershipOfferings();
			
			setProduct(offerings.find(it => it.id === productId));
			setMembership(memberShipOfferings.find(it => it.id === membershipId));
			setLoading(false);
			setProductLoading(false);
			setMembershipLoading(false);
		};
		getOfferings();
	}, []);

	const handleCouponSubmit = useCallback(
		async(code?: string) => {
			try {
				setLoading(true);
				setCouponLoading(true);
				if (!code || !product) throw 'No coupon applied'
				const couponDiscount = await getDiscount({
					keyword: code,
					offering_id: product.id,
					price: product.price.toString(),
				});
				setDiscount(couponDiscount);
				if (couponDiscount.coupon_exist) {
					setDiscountApplied(true);
				} else {
					setDiscountApplied(false);
					toast.error('Coupon doesn\'t exist', {
						icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
					});
				}
				setLoading(false);
				setCouponLoading(false);
			} catch (error) {
				setDiscount(null);
				setDiscountApplied(false);
				setLoading(false);
				setCouponLoading(false);
				toast.error(error as string, {
					icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
				});
			}
		},
		[product, getDiscount]
	);

	const handleCheckout = useCallback(
		async(
			token: string,
		) => {
			try {
				if (!product || !membership || !tempUser) {
					toast.error('', {
						icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
					});
					return;
				}
				setLoading(true);
				setCheckoutLoading(true);
				const checkoutResp = await checkout({
					user_token: tempUser.token,
					stripe_token: token,
					product: {
						price: product.price.toString(),
						offering_id: product.id,
					},
					membership: {
						price: membership.price.toString(),
						offering_id: membership.id,
					},
					addons: {
						price: '',
						offering_id: '',
					},
					coupon: discount?.coupon_details.keyword || '',
				});
				sessionStorage.setItem('checkout_token', checkoutResp.token);
				setLoading(false);
				setCheckoutLoading(false);
				router.push('payment/success');
				sessionStorage.removeItem('temp_user');
			} catch (error) {
				setLoading(false);
				setCheckoutLoading(false);
				toast.error(error as string, {
					icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
				});
			}
		},
		[product, membership, tempUser, discount]
	);
	return (
		<div className='flex flex-col lg:flex-row min-h-screen h-full w-full'>
			<div className='min-h-screen h-auto w-full bg-primary'>
				<div className='flex flex-col w-full px-4 lg:px-20'>
					<PageHeader onBackClick={ () => router.back() } />
					<div className='my-6'>
						<CheckoutItem
							name={ `${membership?.name}` }
							plan={ `Billed ${membership?.billing_frequency}` }
							price={ membership?.first_time_payment }
							metadata={ `then $${
								membership?.price
							} ${membership?.billing_frequency.toLowerCase()}` }
							icon={ TagUserIcon }
							loading={ membershipLoading }
						/>
					</div>
					<div className='my-6'>
						<CheckoutItem
							name={ product?.name || '' }
							plan='One Time Payment'
							price={ product?.price }
							icon={ MicroscopeIcon }
							loading={ productLoading }
						/>
					</div>
					<div className='mt-11 lg:pl-[71px] lg:ml-6'>
						<DiscountForm
							loading={ couponLoading }
							disabled= { loading || couponLoading }
							submitCoupon={ handleCouponSubmit }
							discountApplied={ discountApplied }
						/>
						<TotalCalc
							productPrice={ product?.price || 0 }
							membershipPrice={ membership?.first_time_payment  || 0 }
							discount={ discount }
							setTotalPrice={ setTotalPrice }
						/>
					</div>
				</div>
			</div>
			<div className='h-full w-full bg-white'>
				<StripeElementsProvider
					loading={ checkoutLoading }
					totalPrice={ totalPrice }
					handleCheckout={ handleCheckout }
				/>
			</div>
		</div>
	);
};

interface ITotalCalc {
  productPrice: number;
  membershipPrice: number;
  discount: DiscountReturnType | null;
  setTotalPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
}
const TotalCalc: FC<ITotalCalc> = ({
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
export default StripeCheckout;
