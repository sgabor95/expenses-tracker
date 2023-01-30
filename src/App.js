import ExpensesList from "./components/Expenses/ExpensesList";
import React from "react";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 1800,
      date: new Date("2020 03 28"),
    },
    {
      id: "e2",
      title: "Car revision",
      amount: 1800,
      date: new Date("2020 04 15"),
    },
    {
      id: "e3",
      title: "Supermarket",
      amount: 1800,
      date: new Date("2020 04 16"),
    },
  ];

  return (
    <div>
      <h2>My app's heading!</h2>
      <ExpensesList expenses={expenses} />
      <h2>My app's footer!</h2>
    </div>
  );
};

export default App;
