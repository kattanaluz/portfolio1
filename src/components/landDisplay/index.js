import css from "./landDisplay.module.css";

function LandDisplay() {
  return (
    <div>
      <div className={css.firstRectangle}>
        <div>
          <div className={css.firstTopRectangle}>
            <div className={css.firstRectangleCircle1}></div>
            <div className={css.firstRectangleCircle2}></div>
            <div className={css.firstRectangleCircle3}></div>
          </div>
          <div className={css.textFirstRect}>
            <p>&lt;</p>
            <p>Hello, my name is Kattana and</p>
            <p>I am Brazilian based in London</p>
            <p> /&gt;</p>
          </div>
        </div>
      </div>
      <div className={css.secondRectangle}>
        <div>
          <div className={css.secondTopRectangle}>
            <div className={css.secondRectangleCircle1}></div>
            <div className={css.secondRectangleCircle2}></div>
            <div className={css.secondRectangleCircle3}></div>
          </div>
          <div className={css.textSecondRect}>
            <p>&lt;</p>
            <p>I am a former lawyer training </p>
            <p>
              to become a Web Developer<span className={css.blink}>|</span>
            </p>
            <p>/&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandDisplay;
