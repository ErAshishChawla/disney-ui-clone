import Panel from "./Panel";
import Tile from "./Tile";
import useClasses from "../hooks/useClasses";

function TileRow({ title, tiles, className }) {
  const renderedTiles = tiles.map((tile, idx) => {
    return (
      <Tile
        img={tile}
        key={idx}
        className="basis-52 m-4 rounded-2xl overflow-hidden  border-slate-800 border-4 grow hover:scale-[1.05] cursor-pointer transition-all"
      />
    );
  });
  return (
    <Panel className={useClasses("flex-col mb-6", className)}>
      <div className="text-xl text-white self-start font-bold mx-4 my-2">
        {title}
      </div>
      <Panel className="flex-wrap">{renderedTiles}</Panel>
    </Panel>
  );
}

export default TileRow;
