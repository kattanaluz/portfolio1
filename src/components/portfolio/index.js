import css from "./index.module.css";
import drinkApp from "./drink_app.png";

function Portfolio() {
  return (
    <div className={css.portfolioWrapper}>
      <h2>portfolio</h2>
      <div className={css.projectsDiv}>
        <div className={css.drinkApp}>
          <a href="https://stoic-elion-211222.netlify.app/" target="_blank">
            <img
              className={css.drinkAppImg}
              src={drinkApp}
              alt="drink website"
            />
          </a>
          <div className={css.drinkAppText}>
            <h3>Website to search for drink recipes</h3>
            <p>
              <p>
                The intensive and immersive sixteen-week programming bootcamp
                focuses on exposing the trainees to a range of different
                industry best practices and concepts, such as test driven
                development, agile working methodologies, pair programming, and
                creative problem solving.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
