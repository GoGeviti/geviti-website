'use client';

import { useRouter } from 'next/navigation';
import { FC, useCallback, useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'sonner';

// import MicroscopeIcon from '@/components/Icons/MicroscopeIcon';
import TagUserIcon from '@/components/Icons/TagUserIcon';
import Button from '@/components/Onboarding/Button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/Sheet';

import {
	// checkout,
	getAllProducts,
	getDiscount,
} from '../api/onboarding';
import {
	DiscountReturnType,
	// InitialOfferingsReturnType,
	// MembershipOfferingsReturnType,
	// ProductsPriceResponse,
	ProductsResponse,
} from '../api/types';

import CheckoutItem from './CheckoutItem';
import DiscountForm from './DiscountForm';
import PageHeader from './PageHeader';
import StripeElementsProvider from './StripeElementsProvider';
import { TotalCalc } from './TotalCalculation';

type PageProps = {
	searchParams: { [key: string]: string | string[] | undefined; };
};
// TODO: make membership plans completely dynamic

export const monthlyOrQuarterly = (billingFrequency: string) => {
	if (billingFrequency === 'monthly') {
		return 'Monthly';
	}
	if (billingFrequency === 'quarterly') {
		return 'Quarterly';
	}
	return 'Monthly';
}

const StripeCheckout: FC<PageProps> = ({ searchParams }) => {
	const router = useRouter();
	const productId = searchParams?.product_id;
	const priceId = searchParams?.price_id;

	const [loading, setLoading] = useState(false);
	const [couponLoading, setCouponLoading] = useState(false);
	const [checkoutLoading, setCheckoutLoading] = useState(false);
	const [product, setProduct] = useState<ProductsResponse>();
	const [productSelected, setProductSelected] = useState<ProductsResponse[]>([]);
	const [discount, setDiscount] = useState<DiscountReturnType | null>(null);
	const [totalPrice, setTotalPrice] = useState<number>();
	const [discountApplied, setDiscountApplied] = useState(false);
	const [promoCode, setPromoCode] = useState('');

	useEffect(() => {
		// setProductLoading(true);
		if (!productId || !priceId) {
			router.replace('/pricing');
			return;
		}
		const getOfferings = async() => {
			setLoading(true);
			const products = await getAllProducts();
			setProduct(products.find(it => it.stripeProductId === productId));
			// setAllProducts(products);
			if (Array.isArray(products)) {
				setProductSelected(products.filter(it => it.stripeProductId === productId));
			} else {
				setProductSelected([]);
			}
			setLoading(false);
		};
		getOfferings();
	}, []);

	const handleCouponSubmit = useCallback(
		async(code?: string) => {
			try {
				// setLoading(true);
				setCouponLoading(true);
				if (!code || !product) throw 'No coupon applied'
				const couponDiscount = await getDiscount(code);
				setDiscount(couponDiscount);
				if (couponDiscount?.id) {
					setDiscountApplied(true);
					setPromoCode(() => code.toUpperCase());
				} else {
					setDiscountApplied(false);
					setPromoCode(() => '');
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
		[product, getDiscount]
	);

	const handleCheckout = useCallback(
		async(
			// token: string,
		) => {
			try {
				if (!product) {
					toast.error('', {
						icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
					});
					return;
				}
				setLoading(true);
				setCheckoutLoading(true);
				// const checkoutResp = await checkout({
				// 	user_token: '123',
				// 	stripe_token: token,
				// 	product: {
				// 		price: product.price.toString(),
				// 		offering_id: product.id,
				// 	},
				// 	membership: {
				// 		price: membership.price.toString(),
				// 		offering_id: membership.id,
				// 	},
				// 	addons: {
				// 		price: '',
				// 		offering_id: '',
				// 	},
				// 	coupon: discount?.coupon_details.keyword || '',
				// });
				// sessionStorage.setItem('checkout_token', checkoutResp.token);
				// if (checkoutResp.token) {
				// 	window.dataLayer = window.dataLayer || [];
				// 	window.dataLayer.push({ ecommerce: null });
				// 	window.dataLayer.push({
				// 		event: 'purchase',
				// 		ecommerce: {
				// 			transaction_id: checkoutResp.billingId,
				// 			affiliation: 'GoGeveti',
				// 			value: totalPrice,
				// 			tax: 0,
				// 			shipping: 0,
				// 			currency: 'USD',
				// 			coupon: '',
				// 			items: [
				// 				{
				// 					item_id: product.id,
				// 					item_name: product.name,
				// 					affiliation: 'GoGeveti',
				// 					coupon: discount?.coupon_details.keyword || '',
				// 					currency: 'USD',
				// 					index: '0',
				// 					discount: discount?.coupon_details?.discounted_price ?? 0,
				// 					item_brand: '',
				// 					item_category: '',
				// 					item_category2: '',
				// 					item_variant: membership?.billing_frequency?.toLowerCase(),
				// 					price: product.price,
				// 					quantity: 1
				// 				}
				// 			]
				// 		}
				// 	});
				// }
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
		[product, discount, promoCode]
	);
	return (
		<div className='flex flex-col lg:flex-row min-h-screen h-full w-full font-Poppins'>
			<div className='min-h-screen h-auto w-full bg-primary max-lg:pb-20'>
				<div className='flex flex-col w-full px-4 lg:px-20 sticky top-0'>
					<PageHeader onBackClick={ () => router.back() } />
					<div className='my-6'>
						<CheckoutItem
							name={ `${product?.name}` }
							plan={ `Billed ${monthlyOrQuarterly(product?.productPrices.find(e => e.priceId === priceId)?.billingFrequency ?? '')}` }
							price={ Number(product?.productPrices.find(e => e.priceId === priceId)?.price) }
							metadata={ '' }
							icon={ TagUserIcon }
							loading={ loading }
							productPrices={ product?.productPrices }
							priceId={ priceId?.toString() ?? '' }
						/>
					</div>
					{ /* <div className='my-6'>
						<CheckoutItem
							name={ allProducts?.find(it => it.productType === 'one_time')?.name }
							plan='One Time Payment'
							price={ Number(allProducts?.find(it => it.productType === 'one_time')?.productPrices[0].price) }
							icon={ MicroscopeIcon }
							loading={ loading }
							productPrices={ [] }
							priceId={ priceId?.toString() ?? '' }
						/>
					</div> */ }
					<div className='mt-11 lg:pl-[71px] lg:ml-6'>
						<DiscountForm
							loading={ couponLoading }
							disabled= { couponLoading }
							submitCoupon={ handleCouponSubmit }
							discountApplied={ discountApplied }
						/>
						<TotalCalc
							productPrice={ 0 }
							membershipPrice={ Number(product?.productPrices.find(e => e.priceId === priceId)?.price) }
							discount={ discount }
							setTotalPrice={ setTotalPrice }
						/>
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
								loading={ checkoutLoading }
								totalPrice={ totalPrice }
								handleCheckout={ handleCheckout }
								coupon={ discount?.id && promoCode ? promoCode : '' }
								selectedProduct={ productSelected }
								priceId={ priceId }
							/>
						</SheetContent>
					</Sheet>
				</div>
			</div>
			<div className='h-full w-full bg-white max-lg:hidden'>
				<StripeElementsProvider
					coupon={ discount?.id && promoCode ? promoCode : '' }
					loading={ checkoutLoading }
					totalPrice={ totalPrice }
					handleCheckout={ handleCheckout }
					selectedProduct={ productSelected }
					priceId={ priceId }
				/>
			</div>
		</div>
	);
};

export default StripeCheckout;
