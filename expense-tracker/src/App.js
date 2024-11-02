import React, { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setBalance(balance - expense.amount);
  };

  return (
    <div className="app">
      {/* Pass both expenses and addExpense as props */}
      <ExpenseList initialExpenses={expenses} addExpense={addExpense} />
    </div>
  );
}

export default App;
