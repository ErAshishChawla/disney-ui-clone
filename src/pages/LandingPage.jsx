import Panel from "../components/Panel";
import background from "../assets/images/login-background.jpg";
import Cta1 from "../assets/images/cta-logo-one.svg";
import Cta2 from "../assets/images/cta-logo-two.png";
import Button from "../components/Button.jsx";

import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const styles = {
    backgroundImage: "url('/src/assets/images/login-background.jpg')",
  };

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <Panel
      className="w-full h-full bg-no-repeat bg-center bg-cover"
      style={styles}
    >
      <Panel className="flex-col w-full h-full px-6 max-w-[40rem]">
        <Panel className="mb-6 w-full">
          <img src={Cta1} alt="" className="w-full" />
        </Panel>
        <Button
          primary
          className="w-full py-4 font-bold text-xl mb-6 hover:scale-[1.1] transition-all"
          onClick={handleClick}
        >
          Get All There
        </Button>
        <Panel className="text-[#f9f9f9] text-center text-sm mb-6">
          Get Premier Access To Raya and the Last Dragon for an additional fee
          with a Disney + subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Panel>
        <Panel className="mb-6 w-full">
          <img src={Cta2} alt="" className="w-full" />
        </Panel>
      </Panel>
    </Panel>
  );
}

export default LandingPage;
