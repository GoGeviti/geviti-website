'use client';

import { FC, useCallback, useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

// import MicroscopeIcon from '@/components/Icons/MicroscopeIcon';
import TagUserIcon from '@/components/Icons/TagUserIcon';
import Button from '@/components/Onboarding/Button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/Sheet';
import { ProductMembership } from '@/interfaces/product';
import { useCheckoutStore } from '@/store/checkoutStore';

import { getDiscount, getReferralDiscount, } from '../api/onboarding';

import CheckoutItem from './CheckoutItem';
import DiscountForm from './DiscountForm';
import PageHeader from './PageHeader';
import StripeElementsProvider from './StripeElementsProvider';
import { TotalCalc } from './TotalCalculation';

type PageProps = {
	searchParams: { [key: string]: string | string[] | undefined; };
	priceData?: ProductMembership;
};
// TODO: make membership plans completely dynamic

// export const monthlyOrQuarterly = (billingFrequency: string) => {
// 	if (billingFrequency === 'monthly') {
// 		return 'Monthly';
// 	}
// 	if (billingFrequency === 'quarterly') {
// 		return 'Quarterly';
// 	}
// 	return 'Monthly';
// }

const StripeCheckout: FC<PageProps> = ({ searchParams, priceData }) => {
	const router = useRouter();
	const productId = searchParams?.product_id;
	const priceId = searchParams?.price_id;

	// const [loading, setLoading] = useState(false);
	// const [couponLoading, setCouponLoading] = useState(false);
	// const [checkoutLoading, setCheckoutLoading] = useState(false);
	// const [product, setProduct] = useState<ProductsResponse>();
	// const [productSelected, setProductSelected] = useState<ProductsResponse[]>([]);
	// const [discount, setDiscount] = useState<DiscountReturnType | null>(null);
	// const [totalPrice, setTotalPrice] = useState<number>();
	// const [discountApplied, setDiscountApplied] = useState(false);
	// const [promoCode, setPromoCode] = useState('');

	const {
		setLoading,
		setCouponLoading,
		setCheckoutLoading,
		setDiscount,
		// setTotalPrice,
		setPromoCode,
		setDiscountApplied,
		setProductMembership,
		setSelectedProductPrice,
		// selectedProductPrice,
		productMembership,
		// loading,
		// couponLoading,
		// checkoutLoading,
		discount,
		// totalPrice,
		promoCode,
		// discountApplied,
	} = useCheckoutStore();

	const getFPRef = () => {
		if (typeof window !== 'undefined') {
			return (window as any).FPROM?.data?.ref;
		}
		return undefined;
	};

	useEffect(() => {
		if (priceData) {
			setSelectedProductPrice(priceData.productPrices.find(it => it.priceId === priceId) ?? null);
			setProductMembership(priceData)

			const referralCode = getFPRef();
			// const referralCode = 'bilal31';
			if (referralCode) {
				getReferralDiscount(referralCode).then(res => {
					if (res) {
						handleCouponSubmit(res?.default_promo_code);
					}
				});
			}
		}
	}, [priceData]);

	const handleCouponSubmit = useCallback(
		async(code?: string) => {
			try {
				// setLoading(true);
				setCouponLoading(true);
				if (!code) throw 'No coupon applied'
				const couponDiscount = await getDiscount(code, productId?.toString() ?? '');
				setDiscount(couponDiscount);
				if (couponDiscount?.id) {
					setDiscountApplied(true);
					setPromoCode(code.toUpperCase());
				} else {
					setDiscountApplied(false);
					setPromoCode('');
					toast.error('Coupon doesn\'t exist', {
						icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
					});
				}
				// setLoading(false);
				setCouponLoading(false);
			} catch (error) {
				setDiscount(null);
				setPromoCode('');
				setDiscountApplied(false);
				// setLoading(false);
				setCouponLoading(false);
				toast.error(error as string, {
					icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
				});
			}
		},
		[]
	);
	const handleCheckout = useCallback(
		async(
			// token: string,
		) => {
			try {
				if (!productMembership) {
					toast.error('', {
						icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
					});
					return;
				}
				setLoading(true);
				setCheckoutLoading(true);
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
		[productMembership, discount, promoCode]
	);

	return (
		<div className='flex flex-col lg:flex-row min-h-screen h-full w-full font-Poppins'>
			<div className='min-h-screen h-auto w-full bg-primary max-lg:pb-20'>
				<div className='flex flex-col w-full px-4 lg:px-20 sticky top-0'>
					<PageHeader onBackClick={ () => router.back() } />
					<div className='my-6'>
						<CheckoutItem
							// name={ `${productMembership?.productName}` }
							// plan={ `Billed ${selectedProductPrice?.billingFrequency}` }
							// price={ Number(selectedProductPrice?.price) }
							// loading={ loading }
							// productPrices={ productMembership?.productPrices }
							// priceId={ priceId?.toString() ?? '' }
							metadata={ '' }
							icon={ TagUserIcon }
						/>
					</div>
					<div className='mt-11 lg:pl-[71px] lg:ml-6'>
						<DiscountForm
							// loading={ couponLoading }
							// disabled= { couponLoading }
							submitCoupon={ handleCouponSubmit }
							// discountApplied={ discountApplied }
						/>
						<TotalCalc />
					</div>
					<Sheet >
						<SheetTrigger
							asChild
							className='lg:hidden'>
							<Button className='bg-white text-primary h-[58px] text-lg'>
								Begin Checkout
							</Button>
						</SheetTrigger>
						<SheetContent
							className='rounded-t-[20px] h-[90dvh] overflow-y-auto'
							side='bottom'
							data-lenis-prevent
							onInteractOutside={ e => {
								const hasPacItem = e.composedPath().some((el: EventTarget) => {
									if ('classList' in el) {
										return Array.from((el as Element).classList).includes('pac-item');
									}
									return false;
								});
			
								// if we click an autocomplete item, prevent the default onInteractOutside action, to close
								if (hasPacItem) {
									e.preventDefault();
								}
							} }
						>
							<StripeElementsProvider
								// // loading={ checkoutLoading }
								// totalPrice={ totalPrice }
								handleCheckout={ handleCheckout }
								// coupon={ discount?.id && promoCode ? promoCode : '' }
								// selectedProduct={ productSelected }
								// priceId={ priceId }
								// discount={ discount }
							/>
						</SheetContent>
					</Sheet>
				</div>
			</div>
			<div className='h-full w-full bg-white max-lg:hidden'>
				<StripeElementsProvider
					handleCheckout={ handleCheckout }
					// coupon={ discount?.id && promoCode ? promoCode : '' }
					// loading={ checkoutLoading }
					// totalPrice={ totalPrice }
					// discount={ discount }
					// selectedProduct={ productSelected }
					// priceId={ priceId }
				/>
			</div>
		</div>
	);
};

export default StripeCheckout;
