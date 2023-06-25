import Card from "./Card";
import PropTypes from "prop-types";

const Board = ({
  title,
  cards,
  onDragOver,
  onDrop,
  onDragStart,
  source,
  board,
}) => {
  return (
    <div className="board" onDragOver={onDragOver} onDrop={onDrop}>
      <div className="board__title-container">
        <h2>{title}</h2>
        <div>{cards.length} задачи</div>
      </div>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onDragStart={onDragStart}
          source={source}
          board={source}
        />
      ))}
    </div>
  );
};

export default Board;
