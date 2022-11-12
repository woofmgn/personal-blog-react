// import { useState } from "react";

// import { useSelector } from "react-redux";
// import { RootState, useAppDispatch } from "../../redux/store";

const NewPost = () => {
  // const dispatch = useAppDispatch();

  // const [inputValue, setInputValue] = useState({});

  // const { items, status } = useSelector((state: RootState) => state.articles);

  // const addNewPost = (evt: { target: { value: any; }; }) => {
  //   setInputValue({ articles: evt.target.value });
  // }

  // const handleSubmit = (evt: { preventDefault: () => void; }) => {
  //   evt.preventDefault();
  //   // @ts-ignore
  //   dispatch([inputValue, ...items])
  // }

  return (
    <section className="new-post">
      <form className="posting-form">
        <input
          className="posting-form__input"
          type="text"
          placeholder="Напишите что-нибудь"
        />
        <div className="posting-form__button-container">
          <button className="posting-form__button posting-form__button_type_upload-photo" type="button"></button>
          <button className="posting-form__button posting-form__button_type_submit" type='submit'></button>
        </div>
      </form>
    </section>
  )
}

export default NewPost;
