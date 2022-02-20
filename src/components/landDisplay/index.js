import css from "./landDisplay.module.css";

function LandDisplay() {
  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.landMessageWrapper}>
          <div className={css.landMessage}>
            <h1>
              Hello, I am <span className={css.name}> Kattana</span>
            </h1>
          </div>
          <h2>web developer bootcamper</h2>
        </div>
      </div>
    </div>
  );
}

export default LandDisplay;
