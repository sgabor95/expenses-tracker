import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 1800,
    date: new Date("2020 03 28"),
  },
  {
    id: "e2",
    title: "Car revision",
    amount: 2000,
    date: new Date("2021 04 15"),
  },
  {
    id: "e3",
    title: "Supermarket",
    amount: 300,
    date: new Date("2022 04 16"),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // Update state based on old snapshot of the state
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>My app's heading!</h2>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <ExpensesList expenses={expenses} />
      <h2>My app's footer!</h2>
    </div>
  );
};

export default App;
