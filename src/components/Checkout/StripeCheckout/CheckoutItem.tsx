import { FC } from "react";

interface ICheckoutItem {
  name: string;
  price: string;
  plan: string;
  metadata?: string;
}
const CheckoutItem: FC<ICheckoutItem> = ({ name = "", price = "", plan = "", metadata = "" }) => {
  return (
    <div className='flex border-b-2 border-grey-950 lg:border-none'>
      <ItemThumbnail />
      <div className='flex flex-col w-full lg:flex-row'>
        <div className='ml-6 flex flex-col justify-around'>
          <h3 className='text-white text-lg lg:text-2xl'>{name}</h3>
          <span className='text-grey-primary text-sm'>{plan}</span>
        </div>
        <div className='ml-6 my-6 lg:my-0 lg:ml-auto flex flex-col justify-around text-grey-primary lg:text-right'>
          <p className='text-lg'>${price}</p>
          {metadata && <span className='text-xs whitespace-nowrap leading-7'>{metadata}</span>}
        </div>
      </div>
    </div>
  );
};

function ItemThumbnail() {
  return (
    <div className='flex items-center justify-center w-[53px] h-[53px] lg:w-[71px] lg:h-[71px] bg-blue-primary rounded-[10px]'>
      <TagUserIcon />
    </div>
  );
}

function TagUserIcon() {
  return (
    <svg className='w-6 h-6 lg:w-8 lg:h-8' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='vuesax/outline/tag-user'>
        <g id='tag-user'>
          <path
            id='Vector'
            d='M12 22.75C11.3 22.75 10.59 22.48 10.06 21.95L8.34998 20.26C7.92998 19.84 7.35001 19.61 6.76001 19.61H6C3.93 19.61 2.25 17.94 2.25 15.89V4.97C2.25 2.92 3.93 1.25 6 1.25H18C20.07 1.25 21.75 2.92 21.75 4.97V15.88C21.75 17.93 20.07 19.6 18 19.6H17.24C16.65 19.6 16.07 19.84 15.65 20.25L13.94 21.94C13.41 22.48 12.7 22.75 12 22.75ZM6 2.75C4.76 2.75 3.75 3.75 3.75 4.97V15.88C3.75 17.11 4.76 18.1 6 18.1H6.76001C7.75001 18.1 8.70997 18.5 9.40997 19.19L11.12 20.88C11.61 21.36 12.4 21.36 12.89 20.88L14.6 19.19C15.3 18.5 16.26 18.1 17.25 18.1H18C19.24 18.1 20.25 17.1 20.25 15.88V4.97C20.25 3.74 19.24 2.75 18 2.75H6Z'
            fill='#181A1C'
          />
          <path
            id='Vector_2'
            d='M12.0708 9.6998C12.0508 9.6998 12.0208 9.6998 12.0008 9.6998C11.9708 9.6998 11.9308 9.6998 11.9008 9.6998C10.4408 9.6498 9.30078 8.4698 9.30078 6.9998C9.30078 5.5098 10.5108 4.2998 12.0008 4.2998C13.4908 4.2998 14.7008 5.5098 14.7008 6.9998C14.6908 8.4698 13.5508 9.6498 12.0908 9.6998C12.0908 9.6998 12.0808 9.6998 12.0708 9.6998ZM12.0008 5.7998C11.3408 5.7998 10.8008 6.3398 10.8008 6.9998C10.8008 7.6498 11.3108 8.1798 11.9508 8.1998C11.9508 8.1898 12.0108 8.1898 12.0808 8.1998C12.7108 8.1598 13.2008 7.6398 13.2008 6.9998C13.2008 6.3398 12.6608 5.7998 12.0008 5.7998Z'
            fill='#181A1C'
          />
          <path
            id='Vector_3'
            d='M12 16.7001C10.86 16.7001 9.72002 16.4001 8.83002 15.8101C7.99002 15.2501 7.5 14.4401 7.5 13.5801C7.5 12.7201 7.98002 11.9001 8.83002 11.3401C10.61 10.1601 13.39 10.1601 15.16 11.3401C16 11.9001 16.49 12.7201 16.49 13.5701C16.49 14.4301 16.01 15.2401 15.16 15.8101C14.28 16.4101 13.14 16.7001 12 16.7001ZM9.65997 12.5901C9.22997 12.8801 9 13.2301 9 13.5801C9 13.9301 9.23997 14.2801 9.65997 14.5701C10.93 15.4201 13.06 15.4201 14.33 14.5701C14.76 14.2801 15 13.9301 14.99 13.5801C14.99 13.2301 14.75 12.8801 14.33 12.5901C13.07 11.7401 10.93 11.7401 9.65997 12.5901Z'
            fill='#181A1C'
          />
        </g>
      </g>
    </svg>
  );
}

export default CheckoutItem;