import css from "./index.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Icons() {
  return (
    <div className={css.icons}>
      <div className={css.linkedinIcon}>
        <a
          href="https://www.linkedin.com/in/kattana-luz-6b1000124/"
          target="_blank"
          className={css.linkLinkdinIcon}
        >
          <AiFillLinkedin size="2.5rem" />
        </a>
        <div className={css.gitIcon}>
          <a
            className={css.linkGitIcon}
            href="https://github.com/kattanaluz"
            target="_blank"
          >
            <AiFillGithub size="2.5rem" />
          </a>
        </div>
      </div>
    </div>
  );
}
