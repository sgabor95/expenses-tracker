import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpensesList.css";
import React, { Fragment } from "react";

const ExpensesList = (props) => {
  const { expenses } = props;

  const renderExpenses = () => {
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
  };

  return <Card className="expenses">{renderExpenses()}</Card>;
};

export default ExpensesList;
