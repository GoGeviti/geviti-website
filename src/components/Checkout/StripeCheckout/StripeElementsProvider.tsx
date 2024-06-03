"use client";

import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FC } from "react";

import StripeForm from "./StripeForm";
import { InitialOfferingsReturnType, MembershipOfferingsReturnType } from "../api/types";

type BillingFormProps = {
  totalPrice?: number;
  handleCheckout: (
    token: string,
    product?: InitialOfferingsReturnType,
    membership?: MembershipOfferingsReturnType
  ) => void;
  userEmail: string;
  loading: boolean;
  product?: InitialOfferingsReturnType;
  membership?: MembershipOfferingsReturnType;
};
const StripeElementsProvider: FC<BillingFormProps> = ({
  totalPrice,
  handleCheckout,
  userEmail,
  product,
  membership,
  loading,
}) => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TOKEN_STAGING || "pk_test_fAj7WlTrG0uc5Z9WHKQDdoTq");

  return (
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <StripeForm
            stripe={stripe}
            elements={elements}
            totalPrice={totalPrice}
            handleCheckout={(token) => handleCheckout(token, product, membership)}
            userEmail={userEmail}
            loading={loading}
          />
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default StripeElementsProvider;
