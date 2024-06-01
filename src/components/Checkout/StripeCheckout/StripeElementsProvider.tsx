"use client";

import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { FC } from "react";

import StripeForm from "./StripeForm";
import { UserDetailData } from "@/interfaces/precheckout";

type BillingFormProps = {
  totalPrice?: number;
  handleCheckout: (token: string) => void;
  user: UserDetailData;
};
const StripeElementsProvider: FC<BillingFormProps> = ({ totalPrice, handleCheckout, user }) => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TOKEN_STAGING || "pk_test_fAj7WlTrG0uc5Z9WHKQDdoTq");

  return (
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <StripeForm
            stripe={stripe}
            elements={elements}
            totalPrice={totalPrice}
            handleCheckout={handleCheckout}
            user={user}
          />
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default StripeElementsProvider;
