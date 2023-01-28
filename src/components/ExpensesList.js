import { Fragment } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function renderExpenses(expenses) {
  return (
    <Fragment>
      {expenses.map((element) => {
        return (
          <ExpenseItem
            date={element.date}
            title={element.title}
            amount={element.amount}
          />
        );
      })}
    </Fragment>
  );
}

function ExpensesList(props) {
  const { expenses } = props;

  return <div className="expenses">{renderExpenses(expenses)}</div>;
}

export default ExpensesList;
