
const Articles = () => {
  return (
    <section className="articles">
      <ul className="post-list">
        <li className="post">
          <img className="post__image" src={require('../../images/post-image1.png')} alt="превью статьи" />
          <div className="post__wrapper">
            <h3 className="post__title">Как писать код если мешает кот</h3>
            <p className="post__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
            <div className="post-info">
              <p className="post-info__date">09.09.2022</p>
              <p className="post-info__category">создание сайтов</p>
              <a className="post-info__link" href="/#">ЧИТАТЬ</a>
            </div>
          </div>
        </li>
        <li className="post">
          <img className="post__image" src={require('../../images/post-image1.png')} alt="превью статьи" />
          <div className="post__wrapper">
            <h3 className="post__title">Как писать код быстро и безболезненно</h3>
            <p className="post__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
            <div className="post-info">
              <p className="post-info__date">09.09.2022</p>
              <p className="post-info__category">создание сайтов</p>
              <a className="post-info__link" href="/#">ЧИТАТЬ</a>
            </div>
          </div>
        </li>
        <li className="post">
          <img className="post__image" src={require('../../images/post-image1.png')} alt="превью статьи" />
          <div className="post__wrapper">
            <h3 className="post__title">Как писать код быстро и безболезненно</h3>
            <p className="post__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
            <div className="post-info">
              <p className="post-info__date">09.09.2022</p>
              <p className="post-info__category">создание сайтов</p>
              <a className="post-info__link" href="/#">ЧИТАТЬ</a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Articles;
