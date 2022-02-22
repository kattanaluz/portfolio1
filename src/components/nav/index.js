import css from "./index.module.css";
import image from "./logo.png";
function Nav() {
  return (
    <nav className={css.navBar} id="top">
      <div className={css.logoDiv}>
        <img className={css.logo} alt="logo" src={image}></img>
      </div>
      <div className={css.navElements}>
        <div>
          <a href="#about">about</a>
        </div>
        <div>
          <a href="#portfolio">portfolio</a>
        </div>
        <div>
          <a href="#contact">contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
