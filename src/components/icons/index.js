import css from "./index.module.css";

export default function Icons() {
  return (
    <div className={css.icons}>
      <div className={css.linkedinIcon}>
        <a
          href="https://www.linkedin.com/in/kattana-luz-6b1000124/"
          target="_blank"
        >
          <div class="fab fa-linkedin"></div>
        </a>
        <div className={css.gitIcon}>
          <a href="https://github.com/kattanaluz" target="_blank">
            <div class="fab fa-github-square"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
