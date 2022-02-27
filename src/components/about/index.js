import image from "./girl.png";
import css from "./index.module.css";

function About() {
  return (
    <div id="about" className={css.aboutWrapper}>
      <h3>about me</h3>
      <div className={css.aboutParagraphsWrapper}>
        <div className={css.textDiv}>
          <p>
            I am a former Brazilian lawyer living in London. I love cooking,
            cats, and learning new technologies. To follow this passion for
            tech, I decided to change my career path and start learning how to
            code.
          </p>
          <p>
            Currently, I am studying to become a web developer. I was selected
            to join 200 (out of 1800) other bootcampers at the School of Code
            full stack web developer bootcamp.
          </p>
          <p>
            The intensive and immersive sixteen-week programming bootcamp
            focuses on exposing the trainees to a range of different industry
            best practices and concepts, Agile working methodologies, pair
            programming, and creative problem-solving.
          </p>
          <p>
            I have been learning HTML5, CSS3, JavaScript, Node.js, React, Git
            and GitHub, PostgreSQL, Express.js, MongoDB, and unit testing.
          </p>
        </div>
        <div className={css.imgDiv}>
          <img className={css.imgTag} src={image} alt="girl with a laptop" />
        </div>
      </div>
    </div>
  );
}
export default About;
