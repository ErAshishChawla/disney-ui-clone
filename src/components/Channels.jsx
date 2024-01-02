import Panel from "./Panel";
import "./Channels.css";

function Channels({ channelList, className }) {
  const renderedChannels = channelList.map((channel, idx) => {
    return (
      <Panel
        className="basis-52 h-[10rem] border-slate-800 border-4 m-4 grow  rounded-xl add-shadow hover:scale-[1.1] transition-all cursor-pointer"
        key={idx}
      >
        <img src={channel} alt="channel" />
      </Panel>
    );
  });

  return (
    <Panel className="flex-wrap w-full justify-between mb-4">
      {renderedChannels}
    </Panel>
  );
}

export default Channels;
