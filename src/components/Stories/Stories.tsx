import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";

import { getStoriesList } from "../../redux/slices/storiesSlice";


const Stories = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector((state: RootState) => state.stories);

  const getStories = () => {
    dispatch(getStoriesList());
  };

  useEffect(() => {
    getStories();
  }, []);

  return (
    <section className="stories">
      <ul className="stories-container">
        {
          items.map((item) => (
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
