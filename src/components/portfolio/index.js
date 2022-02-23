import css from "./index.module.css";
import drinkApp from "./drink_app.png";

function Portfolio() {
  return (
    <div className={css.portfolioWrapper} id="portfolio">
      <h3>projects I've built</h3>
      <div className={css.projectsDiv}>
        <div className={css.drinkApp}>
          <a
            className={css.imageLink}
            href="https://stoic-elion-211222.netlify.app/"
            target="_blank"
          >
            <img
              className={css.drinkAppImg}
              src={drinkApp}
              alt="drink website"
            />
          </a>
          <div className={css.drinkAppText}>
            <h4>Drink recipes project</h4>
            <p>HTML | CSS | JAVASCRIPT | REACT.JS | API</p>
            <p>
              The application itself is a single page app where the user can
              search for drink recipes. The application was made using React.js.
              It has a few components and it is using a free API TheCocktailDB
              to fetch the content needed.
            </p>
            <p>
              While developing this project, I could practice how to work with
              an API and async function. I also created components, used props
              and developed the user interface.
            </p>
            <p>
              You can check out the project page{" "}
              <a
                className={css.projectLinks}
                href="https://stoic-elion-211222.netlify.app/"
                target="_blank"
              >
                here
              </a>{" "}
              and the gitHub repository{" "}
              <a
                className={css.projectLinks}
                href="https://github.com/kattanaluz/practice-project-drinks-recipe"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
