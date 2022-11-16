import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getArticlesList } from '../../redux/slices/articlesSlice';
import { RootState, useAppDispatch } from "../../redux/store";

import AddContent from "../AddContent/AddContent";
import ArtictesItem from "../ArtictesItem/ArtictesItem";
import Stories from "../Stories/Stories";



const Main = () => {
  const dispatch = useAppDispatch();

  const { items } = useSelector((state: RootState) => state.articles);

  const getArticles = () => {
    dispatch(getArticlesList())
  };

  useEffect(() => {
    getArticles();
  }, []);


  return (
    <main className="content">
      <Stories />
      <AddContent />
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