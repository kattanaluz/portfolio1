import css from "./index.module.css";
import jobTrackerImage from "./job_tracker_app.png";
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
          href={"https://bossanova.netlify.app/"}
          imgTagClass={css.projectImage}
          src={jobTrackerImage}
          alt={"Job Tracker website"}
          projectTextClass={css.projectText}
          h4Text={"Job Tracker"}
          technologiesClass={css.technologies}
          technologiesText={"REACT | TAILWIND | MONGODB | AUTH0"}
          projectText={`The application enables the users to be authenticated, add new jobs that they want to keep tracking, edit, filter and delete existing jobs, search for useful resources to get a tech role. 
          It was a group (6 people) final project of the School of Code Bootcamp.`}
          projectLinksClass={css.projectLinks}
          pageLink={"https://bossanova.netlify.app/"}
          gitLink={
            "https://github.com/SchoolOfCode/final-project-repo-bossa-nova"
          }
        />
        <SingleProject
          unitProjectDivClass={css.unitProjectDiv}
          aTagClass={css.imageLink}
          href={"https://drink-recipes-finder.netlify.app/"}
          imgTagClass={css.projectImage}
          src={drinkAppImage}
          alt={"Drinks Recipe website"}
          projectTextClass={css.projectText}
          h4Text={"Drinks Recipes"}
          technologiesClass={css.technologies}
          technologiesText={"CSS | JAVASCRIPT | REACT"}
          projectText={`The project is website that enables the user
          search for drink recipes. The application was made using CSS module
          and React.js. It also uses a free API to fetch the content needed.`}
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
          technologiesText={"CSS | JAVASCRIPT | REACT"}
          projectText={`Single-page website that enables the user to play Noughts and Crosses game. 
          The application was built using CSS, vanilla JavaScript, and React.js.`}
          projectLinksClass={css.projectLinks}
          pageLink={"https://noughts-and-crosses-game.netlify.app/"}
          gitLink={"https://github.com/kattanaluz/noughts-and-crosses"}
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
          technologiesText={"HTML | CSS | VANILLA JAVASCRIPT"}
          projectText={`The project is a single-page trivia quiz game using vanilla JavaScript, CSS and HTML.
          It was built in the first month of learning JavaScript at the School of Code Bootcamp.`}
          projectLinksClass={css.projectLinks}
          pageLink={"https://it-crowd-quiz.netlify.app/"}
          gitLink={"https://github.com/kattanaluz/IT-crowd-quiz"}
        />
      </div>
    </div>
  );
}

export default Portfolio;
