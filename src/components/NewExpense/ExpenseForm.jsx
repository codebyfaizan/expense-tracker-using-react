import React from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userInput, setUserInput] = React.useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function userInputHandler(event) {
    const { name, value } = event.target;
    userInput[name] = value;
    setUserInput({ ...userInput });
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData); //Passing expenseData to onSaveExpenseData function which will execute saveExpenseDataHandler function present in NewExpense.jsx

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="enteredTitle"
            onChange={userInputHandler}
            value={userInput.enteredTitle} // Two way binding as the change in value changes the state and the changes in state sets the value making it two way binding
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="enteredAmount"
            min="0.01"
            step="0.01"
            onChange={userInputHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="enteredDate"
            min="2019-01-01"
            max="2022-12-31"
            onChange={userInputHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
