import Carousel from "../components/Carousel/Carousel";
import Panel from "../components/Panel";
import Channels from "../components/Channels";
import TileRow from "../components/TileRow";

import Img1 from "../assets/images/badging4.jpg";
import Img2 from "../assets/images/badging5.jpg";
import Img3 from "../assets/images/scale6.jpg";
import Img4 from "../assets/images/scale16.jpg";

import Channel1 from "../assets/images/scale17.jpg";
import Channel2 from "../assets/images/scale10.jpg";
import Channel3 from "../assets/images/scale7.jpg";
import Channel4 from "../assets/images/scale2.jpg";
import Channel5 from "../assets/images/scale8.jpg";

import Tile1 from "../assets/images/scale.jpg";
import classNames from "classnames";

function HomePage() {
  const images = [Img1, Img2, Img3, Img4];
  const channels = [Channel1, Channel2, Channel3, Channel4, Channel5];
  const tileSet1 = [Tile1, Tile1, Tile1, Tile1];

  const tileSets = [
    {
      title: "Recommended For You",
      tileSet: [
        "/src/assets/images/scale11.jpg",
        "/src/assets/images/scale3.jpg",
        "/src/assets/images/scale12.jpg",
        "/src/assets/images/scale.jpg",
      ],
    },

    {
      title: "New To Disney+",
      tileSet: [
        "/src/assets/images/scale9.jpg",
        "/src/assets/images/scale15.jpg",
        "/src/assets/images/badging3.jpg",
        "/src/assets/images/scale13.jpg",
      ],
    },

    {
      title: "Originals",
      tileSet: [
        "/src/assets/images/badging2.jpg",
        "/src/assets/images/badging.jpg",
        "/src/assets/images/badging7.jpg",
        "/src/assets/images/badging6.jpg",
      ],
    },

    {
      title: "Trending",
      className: "mb-0",
      tileSet: [
        "/src/assets/images/scale5.jpg",
        "/src/assets/images/scale18.jpg",
        "/src/assets/images/scale4.jpg",
        "/src/assets/images/scale14.jpg",
      ],
    },
  ];

  const renderedTileRows = tileSets.map((tileSet, idx) => {
    return (
      <TileRow
        key={idx}
        tiles={tileSet.tileSet}
        title={tileSet.title}
        className={tileSet?.className}
      />
    );
  });

  console.log(Tile1);

  return (
    <Panel className="flex-col w-full h-full justify-start p-8 bg-[#191c29] overflow-y-scroll scrollbar-hide overflow-x-hidden">
      <Carousel images={images} className="mb-[5rem]" />
      <Channels channelList={channels} />
      {renderedTileRows}
    </Panel>
  );
}

export default HomePage;
