import { NavBar, NavBarMb } from "../components/";
import { useState } from "react";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <h1 className="header_logo">Web Developer</h1>
          <h1 className="header_logo-mb">WB</h1>
        </div>

        <NavBar btnClick={() => setNavActive(!navActive)} />
      </div>
      <NavBarMb active={navActive} />
    </header>
  );
};

export default Header;
