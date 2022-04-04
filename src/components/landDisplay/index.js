import css from "./landDisplay.module.css";
import { FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons";

function LandDisplay() {
  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.landMessageWrapper}>
          <div className={css.landMessage}>
            <h1>
              <span className={css.hello}>Hi, I am</span>
              <span className={css.name}>Kattana Luz,</span>
            </h1>
          </div>
          <h2 className={css.landDisplayH2}>
            a former lawyer who is training to become a web developer
          </h2>
        </div>
      </div>
      <div>
        <IconContext.Provider value={{ className: css.downIcon }}>
          <FaChevronDown />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default LandDisplay;
