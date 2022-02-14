import css from "./index.module.css";

function Contact() {
  return (
    <div className={css.contact} id="contact">
      <h2 className={css.contactH2}>contact</h2>
      <div className={css.contactWrapper}>
        <div className={css.formWrapper}>
          <form
            action="https://formsubmit.co/kattanaluz@gmail.com"
            method="post"
          >
            <input
              type="text"
              name="name"
              placeholder="type your name"
              required
            ></input>
            <br />
            <input
              type="email"
              name="mail"
              placeholder="type your email"
              required
            ></input>
            <br />
            <textarea
              className={css.inputMessage}
              type="text"
              name="comment"
              required
              placeholder="type your message"
            ></textarea>
            <br />
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_next"
              value="https://kattanaluz.github.io/portfolio1/"
            ></input>
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
          <p>
            You can also email me at{" "}
            <span id={css.email}>kattanaluz@gmail.com</span>.
          </p>
          <ul className={css.icons}>
            <li>
              <a
                href="https://github.com/kattanaluz"
                title="Image from freeiconspng.com"
                target="_blank"
              >
                <img
                  src="https://www.freeiconspng.com/uploads/github-icon-9.png"
                  width="50"
                  height="50"
                  alt="GitHub Logo"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/kattana-luz-6b1000124/"
                title="Image from freeiconspng.com"
                target="_blank"
              >
                <img
                  src="https://www.freeiconspng.com/uploads/displaying-19-gallery-images-for-linkedin-logo-png-25.png"
                  width="50"
                  height="50"
                  alt="Linkedin Logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="#top" id={css.backToTop}>
        back to the top
      </a>
      <p className={css.designAuthor}>
        {" "}
        CREATED AND DESIGNED BY KATTANA LUZ | 2022
      </p>
    </div>
  );
}

export default Contact;
