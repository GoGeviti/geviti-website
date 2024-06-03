import { NextPage } from "next";
import StripeCheckout from "@/components/Checkout/StripeCheckout";
import IntroScreen from "@/components/IntroScreen";

const PaymentSuccessPage: NextPage = async () => {
  return (
    <IntroScreen type='image'>
      <StripeCheckout />
    </IntroScreen>
  );
};

export default PaymentSuccessPage;
