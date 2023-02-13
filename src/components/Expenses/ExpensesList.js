import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpensesList.css";
import React, { Fragment, useState } from "react";

const ExpensesList = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");
  const { expenses } = props;

  const renderExpenses = () => {
    return (
      <Fragment>
        {expenses
          .filter(
            (expense) => expense.date.getFullYear().toString() === yearFilter
          )
          .map((element) => {
            return (
              <ExpenseItem
                key={element.id}
                date={element.date}
                title={element.title}
                amount={element.amount}
              />
            );
          })}
      </Fragment>
    );
  };

  const filterChangeHandler = (newFilter) => {
    setYearFilter(newFilter);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFilter}
          onFilterChange={filterChangeHandler}
        />
        {renderExpenses()}
      </Card>
    </div>
  );
};

export default ExpensesList;
