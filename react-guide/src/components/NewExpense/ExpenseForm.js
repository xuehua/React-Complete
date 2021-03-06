import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [addAction, setAddAction] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangedHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    console.log("amount changed", event.target.value);
    setAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    console.log("date changed", event.target.value);
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpense(expenseData);
    console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setAddAction(false);
  };

  const addActionHandler = (event) => {
    // event.preventDefault();
    setAddAction(true);
  };

  const cancelAddHandler = (event) => {
    setAddAction(false);
  };

  if (addAction === false) {
    return (
      <div className="new-expense__addbutton">
        <button onClick={addActionHandler}>Add Expense</button>
      </div>
    );
  } else {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangedHandler} value={title} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              onChange={amountChangedHandler}
              min="0.01"
              step="0.01"
              value={amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="date"
              onChange={dateChangedHandler}
              min="2019-01-01"
              max="2022-12-31"
              value={date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelAddHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
};

export default ExpenseForm;
