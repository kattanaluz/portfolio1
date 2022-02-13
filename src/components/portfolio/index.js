import css from "./index.module.css";
import drinkApp from "./drink_app.png";
function Portfolio() {
  return (
    <div className={css.portfolioWrapper}>
      <h2>portfolio</h2>
      <div className={css.projectsDiv}>
        <div className={css.drinkApp}>
          <a href="https://stoic-elion-211222.netlify.app/" target="_blank">
            <img src={drinkApp} alt="drink website" />
          </a>
          <p>Website to search for drink recipes</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
