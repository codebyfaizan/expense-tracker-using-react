import React from "react";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";
import Footer from "./UI/Footer";

const dummyData = [
  {
    id: "e1",
    title: "Amazon",
    amount: 2294.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Flipkart",
    amount: 1799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "BigBasket",
    amount: 1594.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "JioMart",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = React.useState(dummyData);

  function addExpenseHandler(expense) {
    setExpenses([expense, ...expenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      <Footer/>
    </div>
  );
}

export default App;
