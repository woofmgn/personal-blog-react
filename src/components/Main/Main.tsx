import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getArticlesList } from '../../redux/slices/articlesSlice';
import { RootState, useAppDispatch } from "../../redux/store";

import ArtictesItem from "../ArtictesItem/ArtictesItem";
import Stories from "../Stories/Stories";


const Main = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector((state: RootState) => state.articles);

  const getArticles = () => {
    dispatch(getArticlesList())
  };

  useEffect(() => {
    getArticles();
  }, []);


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
      <section className="articles">
        <ul className="post-list">
          {
            items.map((item) => (
              <ArtictesItem key={item.id} {...item} />
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;