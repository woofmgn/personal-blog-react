import { useDispatch, useSelector } from "react-redux";
import { addStories, Stories } from "../../redux/slices/storiesSlice";
import { RootState } from "../../redux/store";

import { useState } from 'react';

const NewPost = () => {
  const dispatch = useDispatch();

  const { items, status } = useSelector((state: RootState) => state.stories);

  const [inputValue, setInputValue] = useState('');

  const handleStories = (evt: { id?: number | undefined; title?: string; imageUrl?: string; date?: string; target?: any; }) => {
    setInputValue(evt.target.value);
  }


  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    const item: Stories = {
      id: '13',
      title: inputValue,
      imageUrl: "https://avatars.dzeninfra.ru/get-zen_doc/4593804/pub_612757887bd64515eaff1a9c_612757a4f5d05136392d639c/scale_1200",
      date: "01.01.2022"
    }

    evt.preventDefault();
    dispatch(addStories(item));
  }

  return (
    <section className="new-post">
      <form className="posting-form" onSubmit={handleSubmit}>
        <input
          onChange={handleStories}
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
