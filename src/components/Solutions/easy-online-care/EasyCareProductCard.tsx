import clsxm from "@/helpers/clsxm";
import ProductCard from "./ProductCard";

interface IProps {
  products: any;
}
const EasyCareProductCard = (props: IProps) => {
  const { products } = props;

  return (
    <section className="w-full md:bg-transparent bg-[#F2F2F2] flex items-center justify-center">
      <div
        className={clsxm(
          "no-scrollbar overflow-y-hidden transition-all select-none transform flex flex-nowrap overflow-x-auto scrolling-touch scroll-smooth gap-x-6 md:pt-[118px] pt-6",
          "snap-x snap-mandatory ml-4 lg:ml-[68px] "
        )}
        id="discover-products-scroll"
      >
        {products?.map((product: any, index: number) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </section>
  );
};

export default EasyCareProductCard;
