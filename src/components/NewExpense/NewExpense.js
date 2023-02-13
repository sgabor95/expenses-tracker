import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (expenseDataInput) => {
    const expenseData = { ...expenseDataInput, id: Math.random().toString() };
    setShowForm(false);
    props.onAddNewExpense(expenseData);
  };

  const onClickAddNewExpenseHandler = () => setShowForm(true);
  const onClickCancelNewExpenseHandler = () => setShowForm(false);

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={onClickAddNewExpenseHandler}>Add new expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onClickCancelNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
