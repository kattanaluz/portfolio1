import css from "./index.module.css";
function Nav() {
  return (
    <nav className={css.navBar} id="top">
      <span>
        <a href="#about">about</a>
      </span>
      <span>
        <a href="#tech">tech</a>
      </span>
      <span>
        <a href="#portfolio">portfolio</a>
      </span>
      <span>
        <a href="#contact">contact</a>
      </span>
    </nav>
  );
}

export default Nav;
