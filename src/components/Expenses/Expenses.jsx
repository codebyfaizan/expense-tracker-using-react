import React from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = React.useState("2021");

  function selectedYearHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
// The expense Received from App component as props is filtered using filter function according to filteredYear selected by the user and then the filteredExpense obtained is mapped to ExpenseItem component to display the data.

return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={selectedYearHandler}
        />
        {/*The year received from ExpensesFilter.jsx is stored via state into filteredYear which is again passed back as selectedYear to ExpensesFilter.jsx as props so to maintain two way binding */}
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
