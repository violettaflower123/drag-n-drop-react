import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Board from "./components/Board";
import {initialCards} from "./data";


const App = () => {
  const [cards, setCards] = useState(initialCards);

  const handleDragStart = (event, card, source) => {
    event.dataTransfer.setData("card", JSON.stringify(card));
    event.dataTransfer.setData("source", source);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, target) => {
    const cardData = JSON.parse(event.dataTransfer.getData("card"));
    const source = event.dataTransfer.getData("source");

    if (source === target) return;

    const newCards = { ...cards };

    newCards[source] = newCards[source].filter(
      (card) => card.id !== cardData.id
    );

    newCards[target] = [...newCards[target], cardData];

    setCards(newCards);
  };

  const [isMenuOpen, setMenuOpen ] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 460) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div className="App">
      <Header />
      <div className="main">
        <Menu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
        <div className="boards">
          <div className="boards__title-container">
            <div>
              <h4 className="boards__title">Мои задачи</h4>
              <button className="boards__edit-btn">
                <img
                  src="./icons/bx-edit.svg"
                  alt="Иконка редактировать"
                />
              </button>
            </div>
            <button className="boards__share-btn">Поделиться</button>
          </div>
          <div className="boards__container">
            <Board
              title="Нужно сделать"
              cards={cards.toDo}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "toDo")}
              onDragStart={handleDragStart}
              source="toDo"
            />
            <Board
              title="В процессе (2)"
              cards={cards.inProgress}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "inProgress")}
              onDragStart={handleDragStart}
              source="inProgress"
            />
            <Board
              title="Готово (3)"
              cards={cards.done}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "done")}
              onDragStart={handleDragStart}
              source="done"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
