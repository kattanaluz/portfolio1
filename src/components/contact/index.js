import css from "./index.module.css";

function Contact() {
  return (
    <div className={css.contactWrapper}>
      <div className={css.contactText}>
        <h2>contact</h2>
        <p>
          If you liked what you see here and you are just curious about what we
          can do working together, feel free to reach out. I would love to
          receive new project idea.
        </p>
      </div>
    </div>
  );
}

export default Contact;
