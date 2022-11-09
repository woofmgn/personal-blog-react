import ArtictesItem from "../ArtictesItem/ArtictesItem";

import { data } from '../../utils';

const Articles = () => {
  return (
    <section className="articles">
      <ul className="post-list">
        {
          data.map((item) => (
            <ArtictesItem key={item.id} {...item} />
          ))
        }
      </ul>
    </section>
  )
}

export default Articles;
