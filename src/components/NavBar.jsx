const NavBar = ({ btnClick, handleScroll }) => {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li onClick={handleScroll}>
          <a href="#work">Work</a>
        </li>
        <li onClick={handleScroll}>
          <a href="#about">About</a>
        </li>
        <li onClick={handleScroll}>
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
