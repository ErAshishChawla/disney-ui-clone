import Panel from "../Panel";
import { useState, useEffect } from "react";
import useClasses from "../../hooks/useClasses";
import CarouselImage from "./CarouselImage";
import CarouselMarker from "./CarouselMarkers";

function Carousel({ images, className }) {
  const setImageProperties = (images) => {
    return images.map((image, idx) => {
      return {
        imgSrc: image,
        styleIndex: idx,
      };
    });
  };

  const [imageList, setImageList] = useState(setImageProperties(images));

  useEffect(() => {
    const handleCarousel = () => {
      setImageList((currImgList) => {
        return currImgList.map((img) => {
          if (img.styleIndex === 0) {
            return { ...img, styleIndex: currImgList.length - 1 };
          }
          return { ...img, styleIndex: img.styleIndex - 1 };
        });
      });
    };

    setInterval(handleCarousel, 6000);
  }, []);

  const carouselImages = imageList.map((image, idx) => {
    return (
      <CarouselImage
        key={idx}
        src={image.imgSrc}
        index={idx}
        styleIndex={image.styleIndex}
        totalImages={images.length}
        className="add-shadow cursor-pointer"
      />
    );
  });

  const carouselMarkers = imageList.map((image, idx) => {
    return (
      <CarouselMarker
        key={idx}
        active={image.styleIndex === 0 ? true : false}
        inactive={image.styleIndex !== 0 ? true : false}
      />
    );
  });

  const classNames = useClasses("relative w-full bg-[#191c29] ", className);
  return (
    <Panel className={classNames}>
      {carouselImages}
      <Panel className="absolute bottom-[-2.5rem]">{carouselMarkers}</Panel>
    </Panel>
  );
}

export default Carousel;
