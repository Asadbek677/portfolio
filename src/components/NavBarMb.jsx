const NavBarMb = ({ active, btnClick }) => {
  return (
    <nav className="nav-bar-mb hidden">
      <ul className={`nav-links ${active ? "active" : ""}`}>
        <li onClick={btnClick}>
          <a href="#work">Work</a>
        </li>
        <li onClick={btnClick}>
          <a href="#about">About</a>
        </li>
        <li onClick={btnClick}>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMb;
