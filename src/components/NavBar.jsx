const NavBar = ({ btnClick }) => {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <a href="#works">Work</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
      <button className="nav-button" onClick={btnClick}>
        ==
      </button>
    </nav>
  );
};

export default NavBar;
