import Button from "./Button";
import Panel from "./Panel";

function Navbar({ logo }) {
  return (
    <Panel className="justify-between px-8 py-4 bg-[#040714] w-full">
      <Panel className="flex justify-center items-center cursor-pointer">
        <img src={logo} alt="logo" className="w-24" />
      </Panel>
      <Button transparent className="hover:scale-[1.1] transition-all">
        Login
      </Button>
    </Panel>
  );
}

export default Navbar;
