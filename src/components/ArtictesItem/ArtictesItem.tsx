type ArticlesItemsProps = {
  id: number;
  title: string;
  imageUrl: string;
  articles: string;
  category: string;
  date: string;
}

const ArtictesItem: React.FC<ArticlesItemsProps> = ({
  title,
  imageUrl,
  articles,
  category,
  date
}) => {
  return (
    <li className="post">
      <img className="post__image" src={imageUrl} alt={title} />
      <div className="post__wrapper">
        <h3 className="post__title">{title}</h3>
        <p className="post__paragraph">{articles}</p>
        <div className="post-info">
          <p className="post-info__date">{date}</p>
          <p className="post-info__category">{category}</p>
          <a className="post-info__link" href="/#">ЧИТАТЬ</a>
        </div>
      </div>
    </li>
  )
}

export default ArtictesItem;
