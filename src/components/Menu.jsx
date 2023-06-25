import { useState } from "react";

const Menu = ({ toggleMenu, isMenuOpen }) => {
  // const [isMenuOpen, setMenuOpen ] = useState(true);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // }
  return (
    <nav className={`menu ${isMenuOpen ? "" : "menu_hidden"}`}>
      <div className={`menu__title ${isMenuOpen ? "" : "menu__title_hidden"}`}>
        <h4>Меню</h4>
        <button className="menu__shrink-btn" onClick={toggleMenu}>
          <img src="./icons/bx-chevrons-left.svg" alt="Иконка" />
        </button>
      </div>
      {isMenuOpen && (
        <>
          <a className="menu__item">
            <img src="./icons/bx-code-alt.svg" alt="Иконка" />
            &#8194;Проекты
          </a>
          <a className="menu__item">
            <img src="./icons/bx-stats.svg" alt="Иконка" />
            &#8194;Статистика
          </a>
          <a className="menu__item">
            <img src="./icons/bx-user.png" alt="Иконка" />
            &#8194;Сотрудники
          </a>
          <a className="menu__item">
            <img src="./icons/bx-transfer-alt.svg" alt="Иконка" />
            &#8194;Приход / Расход
          </a>
          <a className="menu__item">
            <img src="./icons/bx-circle.svg" alt="Иконка" />
            &#8194;Пункт меню
          </a>
        </>
      )}
    </nav>
  );
};

export default Menu;
