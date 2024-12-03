/* eslint-disable no-unused-vars */
import { create } from 'zustand'

import { DiscountReturnType } from '@/components/Checkout/api/types'
import { ProductMembership } from '@/interfaces/product'

interface CheckoutState {
  loading: boolean
  couponLoading: boolean
  checkoutLoading: boolean
  productMembership: ProductMembership | null
  selectedProductPrice: ProductMembership['productPrices'][0] | null
  discount: DiscountReturnType | null
  promoCode: string
  discountApplied: boolean
  totalPrice: number

  // Actions
  setLoading: (loading: boolean) => void
  setCouponLoading: (loading: boolean) => void
  setCheckoutLoading: (loading: boolean) => void
  setProductMembership: (productMembership: ProductMembership) => void
  setSelectedProductPrice: (productPrice: ProductMembership['productPrices'][0] | null) => void
  setDiscount: (discount: DiscountReturnType | null) => void
  setPromoCode: (promoCode: string) => void
  setDiscountApplied: (discountApplied: boolean) => void
  setTotalPrice: (totalPrice: number) => void
}

export const useCheckoutStore = create<CheckoutState>(set => ({
	loading: false,
	couponLoading: false,
	checkoutLoading: false,
	productMembership: null,
	selectedProductPrice: null,
	discount: null,
	promoCode: '',
	discountApplied: false,
	totalPrice: 0,

	setLoading: loading => {
		set({ loading })
	},
	setCouponLoading: loading => {
		set({ couponLoading: loading })
	},
	setCheckoutLoading: loading => {
		set({ checkoutLoading: loading })
	},
	setProductMembership: productMembership => {
		set(() => ({
			productMembership,
			selectedProductPrice: productMembership.productPrices.filter(e => !e.isHidden)[0],
		}))
	},
	setSelectedProductPrice: productPrice => {
		set({ selectedProductPrice: productPrice })
	},
	setDiscount: discount => {
		set({ discount })
	},
	setPromoCode: promoCode => {
		set({ promoCode })
	},
	setDiscountApplied: discountApplied => {
		set({ discountApplied })
	},
	setTotalPrice: totalPrice => {
		set({ totalPrice })
	},
}))
