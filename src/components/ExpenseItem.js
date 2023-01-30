import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const { date, title, amount } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <div>{title}</div>
        <div className="expense-item__price">{amount} RON</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
