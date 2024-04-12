import WellnessProCard from "./WellnessProCard";

const wellnessprolist = [
  {
    title: "Hormone optimization can change your life",
    subtitle: "1 in 4 men over age 30 have low T.",
    description:
      "1 of every 4 men over the age of 30 have a testosterone deficiency. Further, 1 in every three adults are overweight. Geviti offers the ultimate solution for health and wellness.",
    imageURL: "/images/solution_media/low-case.webp",
    mobileimage: "/images/solution_media/low-case-mobile.webp",
    counting: "20",
    million: "Million",
    state: "Men In the united states",
    age: "from ages 25-75 have low T",
  },
  {
    title: "Testosterone deficiencies are common",
    subtitle: "Low T can affect any age group.",
    description:
      "It’s a misconception that your testosterone only drops in your older years. More young men struggle with testosterone deficiencies than ever before.",
    imageURL: "/images/solution_media/hormone-optimization.webp",
    mobileimage: "/images/solution_media/hormone-optimization-mobile.webp",
    counting: "20%",
    million: null,
    state: "YOUNG MEN under 39",
    age: "have a testosterone deficiency",
  },
];

const WellnessPro = () => {
  return (
    <>
      <section className="bg-[#F2F2F2] md:px-4 pt-[63px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-[23px] gap-11 w-full mx-auto md:bg-transparent bg-white py-8 md:py-0 rounded-2xl">
          {wellnessprolist?.map((obj, index) => (
            <WellnessProCard obj={obj} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default WellnessPro;
