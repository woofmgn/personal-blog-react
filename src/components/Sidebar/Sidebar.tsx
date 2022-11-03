/* eslint-disable jsx-a11y/anchor-has-content */


const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__image" src={require('../../images/sidebar-image.png')} alt="рабочее место" />
      <img className="sidebar__avatar" src={require('../../images/avatar.png')} alt="аватар пользователя" />
      <h2 className="sidebar__name">Денис Вакуленко</h2>
      <p className="sidebar__status">блог frontend-разрабочика</p>
      <div className="sidebar__social">
        <a className="sidebar__link sidebar__link_type_instagram" href="/#" />
        <a className="sidebar__link sidebar__link_type_vk" href="/#" />
        <a className="sidebar__link sidebar__link_type_pinterest" href="/#" />
      </div>
      <p className="sidebar__about">Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.</p>
      <div className="send-container">
        <a className="send-container__link" href="/#">Мои работы</a>
        <a className="send-container__link" href="/#">Мои работы</a>
      </div>
    </div>
  )
}

export default Sidebar;

