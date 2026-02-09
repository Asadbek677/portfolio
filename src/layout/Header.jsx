import { NavBar, NavBarMb } from "../components/";
import { useState } from "react";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const handleScroll = () => {
    setNavActive(false);
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <h1 className="header_logo">Web Developer</h1>
          <h1 className="header_logo-mb">WB</h1>
        </div>

        <NavBar
          btnClick={() => setNavActive(!navActive)}
          handleScroll={handleScroll}
        />
      </div>
      <NavBarMb active={navActive} />
    </header>
  );
};

export default Header;
