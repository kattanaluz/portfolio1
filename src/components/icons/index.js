import css from "./index.module.css";

export default function Icons() {
  return (
    <div>
      <div className={css.linkedinIcon}>
        <a
          href="https://www.linkedin.com/in/kattana-luz-6b1000124/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <div className={css.gitIcon}>
          <a href="https://github.com/kattanaluz" target="_blank">
            <i class="fab fa-github-square"></i>
          </a>
        </div>
      </div>
      <div className={css.line}></div>
    </div>
  );
}
