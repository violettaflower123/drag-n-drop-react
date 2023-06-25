const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">UBI CRM</div>
        <div className="header__search-wrapper">
          <img src="./icons/bx-search.svg" />
          <input
            type="search"
            placeholder="Искать сотрудника, задачу и прочее..."
          />
        </div>
        <button className="header__btn">
          <img src="./icons/bx-info-circle.svg" />
        </button>
        <button className="header__btn">
          <img src="./icons/bx-bell.svg" />
        </button>
        <button className="header__btn header__btn_big">+ Создать</button>
        <button className="header__btn header__btn_big">+ Пригласить</button>
        <div className="header__user">
          <div className="header__user-icon">
            <img src="./icons/bx-user.svg" />
          </div>
          <div className="header__user-info">
            <p>Имя сотрудника</p>
            <p>Должность</p>
          </div>
          <button className="header__user-btn">
            <img src="./icons/bx-chevron-down.svg" />
          </button>
        </div>
      </div>
      <div className="header__search-wrapper header__search-wrapper_mob">
        <img src="./icons/bx-search.svg" />
        <input
          type="search"
          placeholder="Искать сотрудника, задачу и прочее..."
        />
      </div>
    </header>
  );
};

export default Header;
