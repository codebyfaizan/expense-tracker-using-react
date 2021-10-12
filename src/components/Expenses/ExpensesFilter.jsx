import React from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {

  function filterChangeHandler(event) {
    const selectedYear = event.target.value;
    props.onFilterChange(selectedYear);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterChangeHandler} value={props.selectedYear}>  {/*The selectedYear sent to Expense.jsx in the filterChangeHandler function is received back from Expenses.jsx as props*/}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
