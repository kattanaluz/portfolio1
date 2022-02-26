import css from "./index.module.css";
import drinkAppImage from "./drink_app.png";
import itCrowdAppImage from "./it_crowd_quiz_app.png";
import noughtCrossesImage from "./noughts_and_crosses_app.png";
import SingleProject from "../singleProject";

function Portfolio() {
  return (
    <div className={css.portfolioWrapper} id="portfolio">
      <h3>projects I've built</h3>
      <div className={css.projectsDiv}>
        <SingleProject
          unitProjectDivClass={css.unitProjectDiv}
          aTagClass={css.imageLink}
          href={"https://stoic-elion-211222.netlify.app/"}
          imgTagClass={css.projectImage}
          src={drinkAppImage}
          alt={"Drinks Recipe website"}
          projectTextClass={css.projectText}
          h4Text={"Drinks Recipes"}
          technologiesClass={css.technologies}
          technologiesText={"HTML | CSS | JAVASCRIPT | REACT"}
          projectText={` The application itself is a single page app where the user can
          search for drink recipes. The application was made using CSS, vanilla javaScript,
          and React.js. I also used a free API (TheCocktailDB) to fetch the content needed.`}
          projectLinksClass={css.projectLinks}
          pageLink={"https://drink-recipes-finder.netlify.app/"}
          gitLink={
            "https://github.com/kattanaluz/practice-project-drinks-recipe"
          }
        />
        <SingleProject
          unitProjectDivClass={css.unitProjectDiv}
          aTagClass={css.imageLink}
          href={"https://noughts-and-crosses-game.netlify.app/"}
          imgTagClass={css.projectImage}
          src={noughtCrossesImage}
          alt={"Noughts and Crosses website"}
          projectTextClass={css.projectText}
          h4Text={"Noughts and Crosses"}
          technologiesClass={css.technologies}
          technologiesText={"HTML | CSS | JAVASCRIPT | REACT"}
          projectText={`The project is a single page web site where the user can play
            Noughts and Crosses game. The application was built using CSS,
            vanilla JavaScript and React.js.`}
          projectLinksClass={css.projectLinks}
          pageLink={"https://it-crowd-quiz.netlify.app/"}
          gitLink={"https://github.com/kattanaluz/IT-crowd-quiz"}
        />

        <SingleProject
          unitProjectDivClass={css.unitProjectDiv}
          aTagClass={css.imageLink}
          href={"https://it-crowd-quiz.netlify.app/"}
          imgTagClass={css.projectImage}
          src={itCrowdAppImage}
          alt={"IT Crowd Quiz website"}
          projectTextClass={css.projectText}
          h4Text={"IT Crowd Quiz"}
          technologiesClass={css.technologies}
          technologiesText={"HTML | CSS | JAVASCRIPT"}
          projectText={`The project is a single page trivia quiz.
          I built this project in the first month of learning JavaScript at School of Code Bootcamp.`}
          projectLinksClass={css.projectLinks}
          pageLink={"https://it-crowd-quiz.netlify.app/"}
          gitLink={"https://github.com/kattanaluz/IT-crowd-quiz"}
        />
      </div>
    </div>
  );
}

export default Portfolio;
