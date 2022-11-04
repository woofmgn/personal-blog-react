import Articles from "../Articles/Articles";
import Stories from "../Stories/Stories";

const Main = () => {
  return (
    <main className="content">
      <Stories />
      <section className="new-post">
        <form className="posting-form">
          <input className="posting-form__input" type="text" placeholder="Напишите что-нибудь" />
          <div className="posting-form__button-container">
            <button className="posting-form__button posting-form__button_type_upload-photo" type="button"></button>
            <button className="posting-form__button posting-form__button_type_submit" type='submit'></button>
          </div>
        </form>
      </section>
      <Articles />
    </main>
  )
}

export default Main;