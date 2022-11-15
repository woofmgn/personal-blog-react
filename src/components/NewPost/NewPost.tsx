import { useDispatch, useSelector } from "react-redux";
import { addStories, setStoriesList, Stories, toggleInputUrl } from "../../redux/slices/storiesSlice";
import { RootState } from "../../redux/store";

import { useState } from 'react';

const NewPost = () => {
  const dispatch = useDispatch();

  const { items, inputUrl, status } = useSelector((state: RootState) => state.stories);

  const [inputTitleValue, setInputTitleValue] = useState('');
  const [inputUrlValue, setInputUrlValue] = useState('');

  const handleTitleStories = (evt: { id?: number | undefined; title?: string; imageUrl?: string; date?: string; target?: any; }) => {
    setInputTitleValue(evt.target.value);
  }

  const handleUrlStories = (evt: { id?: number | undefined; title?: string; imageUrl?: string; date?: string; target?: any; }) => {
    setInputUrlValue(evt.target.value);
  }

  const openInputUrl = () => {
    dispatch(toggleInputUrl());
  }

  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    const nowDate = new Date();
    const item: Stories = {
      // id: '13',
      title: inputTitleValue,
      imageUrl: inputUrlValue,
      date: nowDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' }),
    }

    evt.preventDefault();
    dispatch(addStories(item));
    //@ts-ignore
    dispatch(setStoriesList(item))
    setInputTitleValue('');
    setInputUrlValue('');
    openInputUrl();
  }

  return (
    <section className="new-post">
      <form className="posting-form" onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <input
            onChange={handleTitleStories}
            value={inputTitleValue || ''}
            className="posting-form__input posting-form__input_type_title"
            type="text"
            placeholder="Напишите что-нибудь"
          />

          <div className="posting-form__button-container">
            <button
              className="posting-form__button posting-form__button_type_upload-photo"
              type="button"
              onClick={openInputUrl}
            />
            <button
              className="posting-form__button posting-form__button_type_submit"
              type='submit'
            />
          </div>
        </div>
        {
          inputUrl && <input
            onChange={handleUrlStories}
            value={inputUrlValue || ''}
            type="url"
            className="posting-form__input posting-form__input_type_image"
            placeholder="Введиите URL картинки"
          />
        }
      </form>
    </section>
  )
}

export default NewPost;
