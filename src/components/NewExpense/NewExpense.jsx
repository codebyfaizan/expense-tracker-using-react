import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

  function saveExpenseDataHandler(enteredExpenseData){
    const expenseData = {...enteredExpenseData, id : Math.random().toString()};
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

const [isEditing, setIsEditing] = React.useState(false); 

function isEditingHandler(){
setIsEditing(true);
}

function stopEditingHandler(){
  setIsEditing(false);
}

  return (
    <div className="new-expense">
    {isEditing ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelEditing={stopEditingHandler}/> : <button onClick={isEditingHandler}>Add new Expense</button>}
    </div>
  );
}

export default NewExpense;
