import EasyOnlineCareCard from "./EasyOnlineCareCard";
import SliderData from "./SliderData";

interface IProps {
  treatmentmens: any;
}

const Thyroid = (props: IProps) => {
  const { cards } = props.treatmentmens;
  return (
    <>
      <section className="bg-[#F2F2F2]">
        <div className="bg-white flex gap-[23px] justify-between max-w-[1416px] w-full overflow-hidden">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 xl:pl-[68px] gap-[65px] md:gap-6 md:pt-[70px]">
            <div className="max-w-1/2 flex flex-col w-full md:mt-0 mt-[57px] z-10">
              <EasyOnlineCareCard obj={cards} />
            </div>
            <div className="max-w-[696px] w-full flex flex-col items-center justify-between relative">
              <SliderData cardslist={cards.cardslist} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Thyroid;
