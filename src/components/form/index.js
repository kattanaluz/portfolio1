import css from "./index.module.css";

function Form() {
  return (
    <div className={css.formWrapper}>
      <form
        action="mailto:someone@example.com"
        method="post"
        enctype="text/plain"
      >
        <input type="text" name="name" placeholder="type your name"></input>
        <br />
        <input type="text" name="mail" placeholder="type your email"></input>
        <br />
        <input
          className={css.inputMessage}
          type="text"
          name="comment"
          size="3500"
        ></input>
        <br />
        <input className={css.inputButton} type="submit" value="send"></input>
      </form>
    </div>
  );
}

export default Form;
