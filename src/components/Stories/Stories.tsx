import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getStoriesList } from "../../redux/slices/storiesSlice";

import { RootState, useAppDispatch } from "../../redux/store";

const Stories = () => {
  const dispatch = useAppDispatch();

  const { items } = useSelector((state: RootState) => state.stories);

  const getStories = () => {
    dispatch(getStoriesList());
  };

  useEffect(() => {
    getStories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="stories">
      <ul className="stories-container">
        {
          items.slice(items.length - 5, items.length - 1).map((item) => (
            <li className="stories-container__item" key={item.id}>
              <img className="stories-container__image" src={item.imageUrl} alt={item.title} />
              <h2 className="stories-container__title">{item.title}</h2>
              <p className="stories-container__date">{item.date}</p>
            </li>
          )
          )
        }
      </ul>
    </section>
  )
}

export default Stories;
