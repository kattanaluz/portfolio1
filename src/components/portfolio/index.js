import css from "./index.module.css";
import drinkAppImage from "./drink_app.png";
import itCrowdAppImage from "./it_crowd_quiz_app.png";

function Portfolio() {
  return (
    <div className={css.portfolioWrapper} id="portfolio">
      <h3>projects I've built</h3>
      <div className={css.projectsDiv}>
        <div className={css.unitProjectDiv}>
          <a
            className={css.imageLink}
            href="https://stoic-elion-211222.netlify.app/"
            target="_blank"
          >
            <img
              className={css.projectImage}
              src={drinkAppImage}
              alt="drink website"
            />
          </a>
          <div className={css.projectText}>
            <h4>Drink recipes project</h4>
            <p className={css.technologies}>
              HTML | CSS | JAVASCRIPT | REACT.JS | API
            </p>
            <p>
              The application itself is a single page app where the user can
              search for drink recipes. The application was made using React.js
              and it is using a free API (TheCocktailDB).
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
        <div className={css.unitProjectDiv}>
          <a
            className={css.imageLink}
            href="https://it-crowd-quiz.netlify.app/"
            target="_blank"
          >
            <img
              className={css.projectImage}
              src={itCrowdAppImage}
              alt="drink website"
            />
          </a>
          <div className={css.projectText}>
            <h4>IT Crowd quiz project</h4>
            <p className={css.technologies}>HTML | CSS | JAVASCRIPT</p>
            <p>
              The project is a single page trivia quiz. It was the first project
              I built by myself after the first month of starting learning
              JavaScript at School of Code Bootcamp. While developing this
              project, I could practice building a web page with HTML and CSS,
              and I could increase my knowledge of the fundamentals of
              JavaScript.
            </p>
            <p>
              You can check out the project page{" "}
              <a
                className={css.projectLinks}
                href="https://it-crowd-quiz.netlify.app/"
                target="_blank"
              >
                here
              </a>{" "}
              and the gitHub repository{" "}
              <a
                className={css.projectLinks}
                href="https://github.com/kattanaluz/IT-crowd-quiz"
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
