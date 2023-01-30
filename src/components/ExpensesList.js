import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./ExpensesList.css";

function ExpensesList(props) {
  const { expenses } = props;

  return (
    <Card className="expenses">
      {expenses.map((element) => {
        return (
          <ExpenseItem
            date={element.date}
            title={element.title}
            amount={element.amount}
          />
        );
      })}
    </Card>
  );
}

export default ExpensesList;
