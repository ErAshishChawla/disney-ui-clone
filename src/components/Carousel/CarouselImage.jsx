import Panel from "../Panel";
import useClasses from "../../hooks/useClasses";

function CarouselImage({ src, styleIndex, index, totalImages, className }) {
  const classNames = useClasses(
    "w-full top-0",
    {
      "translate-x-0": styleIndex === 0,
      "translate-x-[-101.5%]": styleIndex === totalImages - 1,
      absolute: styleIndex !== 0,
    },
    className
  );

  return (
    <Panel
      className={classNames}
      style={{
        translate:
          styleIndex > 0 &&
          styleIndex < totalImages - 1 &&
          `calc(${styleIndex} * 101.5%)`,
        transition:
          styleIndex === totalImages - 2 ? "none" : "all 1s ease-in-out",
      }}
    >
      <img src={src} className="w-full" />
    </Panel>
  );
}

export default CarouselImage;
