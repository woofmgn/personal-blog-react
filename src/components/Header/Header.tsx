

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <a className="header__link" href="/#">главная</a>
        </li>
        <li>
          <a className="header__link" href="/#">статьи</a>
        </li>
        <li>
          <a className="header__link" href="/#">обо мне</a>
        </li>
        <li>
          <a className="header__link" href="/#">реклама</a>
        </li>
      </ul>
      <div className="input-wrapper">
        <a className="input-wrapper__link" href="/#">профиль</a>
        <form>
          <input placeholder="Поиск по блогу" />
        </form>
      </div>
    </header>
  )
}

export default Header;