import css from "./index.module.css";

function Contact() {
  return (
    <div className={css.contact}>
      <h2 className={css.contactH2}>contact</h2>
      <div className={css.contactWrapper}>
        <div className={css.formWrapper}>
          <form
            action="mailto:someone@example.com"
            method="post"
            enctype="text/plain"
          >
            <input type="text" name="name" placeholder="type your name"></input>
            <br />
            <input
              type="text"
              name="mail"
              placeholder="type your email"
            ></input>
            <br />
            <input
              className={css.inputMessage}
              type="text"
              name="comment"
              size="3500"
            ></input>
            <br />
            <input
              className={css.inputButton}
              type="submit"
              value="send"
            ></input>
          </form>
        </div>
        <div className={css.contactText}>
          <p>
            If you liked what you see here and you are just curious about what
            we can do working together, feel free to reach out. I would love to
            receive new project idea.
          </p>
          <p>
            I'm available to grab a coffee and chat! Drop a comment, question,
            concern, or Spotify playlist, and thanks for stopping by!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
