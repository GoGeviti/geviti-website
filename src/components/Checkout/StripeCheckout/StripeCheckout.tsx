import React, { FC } from "react";
import { ArrowNarrowLeft } from "@/components/Icons";
import Image from "next/image";

const StripeCheckout: FC = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='h-screen w-full bg-primary'>
        <div>
          <PageHeader />
        </div>
      </div>
      <div className='h-screen w-full bg-white'>
        <h1>Stripe Form</h1>
      </div>
    </div>
  );
};

function PageHeader() {
  return (
    <div className='flex w-full px-4 py-8 lg:pl-20 lg:pt-11 lg:flex-col bg-primary border-b-[0.6px] border-grey-950 lg:border-none'>
      <BackArrow />
      <div className='w-1/3 m-auto lg:mt-14 lg:w-full'>
        <GevitiLogo />
        <p className='hidden lg:block text-blue-primary mt-3'>Enjoy your first month for FREE!</p>
      </div>
    </div>
  );
}

function BackArrow() {
  return (
    <button className='focus:outline-none focus:ring-0 inline-flex items-center gap-1 lg:gap-3.5'>
      <ArrowNarrowLeft className='relative overflow-hidden w-18px lg:w-6 h-18px lg:h-6 text-white' />
      <span className='text-grey-500 font-semibold text-xs lg:text-lg !leading-normal'>BACK</span>
    </button>
  );
}

function GevitiLogo() {
  return (
    <div className='relative overflow-hidden w-[85px] lg:w-[145px] h-5 lg:h-[34.12px]'>
      <Image src='/images/logo/logo_light.webp' alt='geviti' fill className='w-full h-full' />
    </div>
  );
}

export default StripeCheckout;
