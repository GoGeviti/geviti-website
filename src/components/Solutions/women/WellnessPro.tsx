import WellnessProCard from "./WellnessProCard";

const wellnessprolist = [
  {
    title: "Maintaining A healthy weight is vital",
    subtitle: "We have a weight problem.",
    description:
      "4 in every 10 women have a Body Mass Index greater than 30, classifying theme as obese. Obesity comes with an increased risk for diabetes, heart disease, and some cancers. ",
    imageURL: "/images/solution_media/women-img-1.png",
    mobileimage: "/images/solution_media/women-img-1.png",
    counting: "40%",
    million: null,
    state: "Of women in America",
    age: "Struggle with obesity ",
  },
  {
    title: "optimized hormonal states can be maintained",
    subtitle: "Lets optimize your hormones.",
    description:
      "It’s a misconception that your testosterone only drops in your older years. More young men struggle with testosterone deficiencies than ever before.",
    imageURL: "/images/solution_media/women-img-2.png",
    mobileimage: "/images/solution_media/women-img-2.png",
    counting: "80%",
    million: null,
    state: "Of women in America",
    age: "struggle with hormone imbalances",
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
