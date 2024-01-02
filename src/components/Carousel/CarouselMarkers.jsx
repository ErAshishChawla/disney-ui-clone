import useClasses from "../../hooks/useClasses";

function CarouselMarkers({ active, inactive }) {
  const classNames = useClasses(
    `h-[0.4rem] w-[0.4rem] sm:h-[0.45rem] sm:w-[0.45rem] 
    md:h-[0.55rem] md:w-[0.55rem] lg:h-[0.65rem] lg:w-[0.65rem]
    rounded-full m-2 cursor-pointer hover:scale-[1.2]`,
    {
      "bg-[#ffffff] scale-[1.2]": active,
      "bg-[#ffffff99]": inactive,
    }
  );
  return <div className={classNames}></div>;
}

export default CarouselMarkers;
