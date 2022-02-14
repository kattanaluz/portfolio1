import image from "./girl.png";
import css from "./index.module.css";

function TechDisplay() {
  return (
    <div id="tech">
      <h2 className={css.h2Header}>tech information</h2>
      <div className={css.techDisplayWrapper}>
        <div className={css.textDiv}>
          <p>
            I was selected to join 200 (out of 1800) other bootcampers at the
            School of Code full stack programming bootcamp.
          </p>
          <p>
            The intensive and immersive sixteen-week programming bootcamp
            focuses on exposing the trainees to a range of different industry
            best practices and concepts, such as test driven development, agile
            working methodologies, pair programming, and creative problem
            solving.
          </p>
          <p>
            I've been learning HTML5, CSS3, JavaScript, Node.js, React, Git and
            GitHub, PostgreSQL, Express.js, TDD, Jest, Next.js.
          </p>
        </div>
        <div className={css.imgDiv}>
          <img className={css.imgTag} src={image} alt="girl with a laptop" />
        </div>
      </div>
    </div>
  );
}
export default TechDisplay;
