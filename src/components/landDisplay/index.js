import css from "./landDisplay.module.css";

function LandDisplay() {
  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.landMessageWrapper}>
          <div className={css.landMessage}>
            <h1>
              <span className={css.hello}>Hello, </span>
              <span className={css.name}>I am Kattana</span>
            </h1>
          </div>
          <h2 className={css.LandDisplayH3}>web developer bootcamper</h2>
        </div>
      </div>
    </div>
  );
}

export default LandDisplay;
