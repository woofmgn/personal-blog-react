
const Main = () => {
  return (
    <main className="content">
      <section className="stories">
        <ul className="stories-container">
          <li className="stories-container__item">
            <img className="stories-container__image" src={require('../../images/story.png')} alt="#" />
            <h2 className="stories-container__title">Отдых на природе</h2>
            <p className="stories-container__date">12.03.2022</p>
          </li>
          <li className="stories-container__item">
            <img className="stories-container__image" src={require('../../images/story.png')} alt="#" />
            <h2 className="stories-container__title">Заканчиваю проект</h2>
            <p className="stories-container__date">12.03.2022</p>
          </li>
          <li className="stories-container__item">
            <img className="stories-container__image" src={require('../../images/story.png')} alt="#" />
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
      <section className="posting">

      </section>
      <section className="articles">

      </section>
    </main>
  )
}

export default Main;