
const Main = () => {
  return (
    <main className="content">
      <section className="stories">
        <ul className="stories-container">
          <li className="stories-container__item">
            <img className="stories-container__image" src={require('../../images/story3.png')} alt="#" />
            <h2 className="stories-container__title">Отдых на природе</h2>
            <p className="stories-container__date">12.03.2022</p>
          </li>
          <li className="stories-container__item">
            <img className="stories-container__image" src={require('../../images/story.png')} alt="#" />
            <h2 className="stories-container__title">Заканчиваю проект</h2>
            <p className="stories-container__date">12.03.2022</p>
          </li>
          <li className="stories-container__item">
            <img className="stories-container__image" src={require('../../images/story3.png')} alt="#" />
            <h2 className="stories-container__title">Переехал в новую квартиру</h2>
            <p className="stories-container__date">12.03.2022</p>
          </li>
          <li className="stories-container__item">
            <img className="stories-container__image" src={require('../../images/story.png')} alt="#" />
            <h2 className="stories-container__title">Осень пришла!</h2>
            <p className="stories-container__date">12.03.2022</p>
          </li>
        </ul>
      </section>
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
    </main>
  )
}

export default Main;