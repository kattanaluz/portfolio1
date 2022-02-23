import css from "./landDisplay.module.css";

function LandDisplay() {
  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.landMessageWrapper}>
          <div className={css.landMessage}>
            <h1>
              <span className={css.hello}>Hi, my name is</span>
              <span className={css.name}>Kattana Luz.</span>
            </h1>
          </div>
          <h2 className={css.landDisplayH2}>
            <span className={css.angleBracket}>&lt;</span> I am a former lawyer
            who is studding to become a web developer
            <span className={css.angleBracket}>/&gt;</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LandDisplay;
