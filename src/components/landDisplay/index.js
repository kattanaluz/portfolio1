import css from "./landDisplay.module.css";

function LandDisplay() {
  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.left}>
          <div className={css.landTextWrapper1}>
            <span className={css.helloPart1}>
              <p>Hello, </p>
            </span>
            <span className={css.helloPart2}>
              <p></p>
            </span>
            <span className={css.helloPart3}>
              <p></p>
            </span>
          </div>
        </div>
        <div className={css.right}>
          <div className={css.landTextWrapper2}>
            <span className={css.h1Span}>
              <h1 className={css.h1FirstPart}>I am</h1>
              <h1 className={css.h1SecondPart}>Kattana </h1>
            </span>
            <span className={css.h2Span}>
              <h2>web developer bootcamper</h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandDisplay;
