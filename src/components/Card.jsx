const Card = ({ card, onDragStart, source, board }) => {
  const cardClassName = `card ${
    board === "toDo" ? "red" : board === "inProgress" ? "yellow" : "green"
  }`;
  const priorityClassName = `card__priority ${
    card.priority === "Низкий" ? "card__priority-green" : card.priority === "Средний" ? "card__priority-yellow" : "card__priority-red"
  }`;
  const deadlineClassName = `card__deadline ${
    card.deadline === "Завтра" ? "card__deadline-yellow" : board === "done" ? "card__deadline-red" : "card__deadline-blue"
  }`;
  return (
    <div
      className={cardClassName}
      draggable
      onDragStart={(e) => onDragStart(e, card, source)}
    >
      <div className="card__details">
        <div className="card__details-inner">
          <div className={deadlineClassName}>{card.deadline}</div>
          <div className={priorityClassName}>{card.priority}</div>
        </div>
        <button className="card__edit-btn">
          <img
            src="/icons/bx-dots-horizontal-rounded.svg"
            alt="Иконка редактирования карточки"
          />
        </button>
      </div>
      <p className="card__project-name">
        Задача по проекту: <span>{card.project}</span>
      </p>
      <div className="card__date-wrapper">
        <h4>Задача {card.id}</h4>
        <p className="card__date">{card.date}</p>
      </div>
      <p className="card__text">{card.text}</p>
      <div className="card__footer">
        <div className="card__footer-box">
          <div className="card__author">{card.author}</div>
          <img
            src="./icons/bx-chevron-right.svg"
            alt="Стрелочка вправо"
          />
          <div className="card__doers">
            {card.doers.map((element) => (
              <div className="card__doer">{element}</div>
            ))}
          </div>
        </div>
        <div className="card__comments">
          <img src="./icons/bx-message-square-detail.svg" alt="Иконка сообщения"/>
          {card.comments} {card.comments === 1 ? "комментарий" : card.comments === 3 ? "комментария" : "комментариев"}
        </div>
      </div>
    </div>
  );
};

export default Card;
