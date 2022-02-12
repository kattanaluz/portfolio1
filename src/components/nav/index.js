import css from "./index.module.css";
function Nav() {
  return (
    <nav className={css.navBar}>
      <span>
        <a>tech</a>
      </span>
      <span>
        <a>portfolio</a>
      </span>
      <span>
        <a>contact</a>
      </span>
    </nav>
  );
}

export default Nav;
