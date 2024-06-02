"use client";
import { NextPage } from "next";
import StripeCheckout from "@/components/Checkout/StripeCheckout";

const PaymentSuccessPage: NextPage = () => {
  return <StripeCheckout />;
};

export default PaymentSuccessPage;
