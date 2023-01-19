import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const { date, title, amount } = props;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <div>{title}</div>
        <div className="expense-item__price">{amount} RON</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
