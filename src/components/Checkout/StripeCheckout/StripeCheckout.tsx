'use client';

import { FC, useCallback, useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

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
	geviti_token?: string;
};

const StripeCheckout: FC<PageProps> = ({ searchParams, priceData, geviti_token }) => {
	const router = useRouter();
	const productId = searchParams?.product_id;
	const priceId = searchParams?.price_id;

	const {
		setLoading,
		setCouponLoading,
		setCheckoutLoading,
		setDiscount,
		setPromoCode,
		setDiscountApplied,
		setProductMembership,
		setSelectedProductPrice,
		selectedProductPrice,
		productMembership,
		discount,
		promoCode,
	} = useCheckoutStore();

	// Check if this is a free product (no price_id and product_id)
	const isFreeProduct = !priceId && !productId;

	const getFPRef = () => {
		if (typeof window !== 'undefined') {
			// const fprom = (window as any).FPROM?.data?.ref_id;
			// console.log('fprom ==> ', fprom);
			return (window as any).FPROM?.data?.ref_id;
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

			if (typeof window !== 'undefined' && window.MAI) {
				window.MAI.emit('checkout', Number(selectedProductPrice?.price), 'USD', {
					id: productMembership?.productId.toString() ?? '',
					quantity: 1,
					discountCode: promoCode,
					lineItems: [
						{
							quantity: 1,
							productId: productMembership?.productId.toString() ?? '',
							productName: productMembership?.productName ?? '',
							productType: 'membership',
							productVendor: 'GoGeveti',
							variantId: selectedProductPrice?.priceId ?? '',
							variantName: selectedProductPrice?.billingFrequency ?? ''
						}
					]
				}
				);
			}
			if (typeof window !== 'undefined' && window.vbpx) {
				window.vbpx('event', 'lead');
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
					// setPromoCode('');
					toast.error('Coupon doesn\'t exist', {
						icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
					});
				}
				setCouponLoading(false);
			} catch (error) {
				setDiscount(null);
				// setPromoCode('');
				setDiscountApplied(false);
				setCouponLoading(false);
				toast.error(error as string, {
					icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
				});
			}
		},
		[]
	);
	const handleCheckout = useCallback(
		async() => {
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
							metadata={ '' }
							icon={ TagUserIcon }
						/>
					</div>
					<div className='mt-11 lg:pl-[71px] lg:ml-6'>
						{ !isFreeProduct && (
							<DiscountForm
								submitCoupon={ handleCouponSubmit }
							/>
						) }
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
								geviti_token={ geviti_token }
								handleCheckout={ handleCheckout }
							/>
						</SheetContent>
					</Sheet>
				</div>
			</div>
			<div className='h-full w-full bg-white max-lg:hidden'>
				<StripeElementsProvider
					geviti_token={ geviti_token }
					handleCheckout={ handleCheckout }
				/>
			</div>
		</div>
	);
};

export default StripeCheckout;
