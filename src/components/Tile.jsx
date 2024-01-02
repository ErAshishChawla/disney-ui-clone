import Panel from "./Panel";
import useClasses from "../hooks/useClasses";

function Tile({ img, className }) {
  const classNames = useClasses("grow h-[13.5rem]", className);
  return (
    <Panel className={classNames}>
      <img src={img} alt="tile" className="w-full h-full" />
    </Panel>
  );
}

export default Tile;
