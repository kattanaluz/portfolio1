import Icons from "../icons";
import css from "./index.module.css";

function Contact() {
  return (
    <div className={css.contactWrapper} id="contact">
      <h3>get in touch</h3>
      <div className={css.contactParagraphsWrapper}>
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
          <Icons />
        </div>
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
      </div>
      <a href="#top" id={css.backToTop}>
        back to the top
      </a>
      <p id={css.designAuthor}>CREATED AND DESIGNED BY KATTANA LUZ | 2022</p>
    </div>
  );
}

export default Contact;
