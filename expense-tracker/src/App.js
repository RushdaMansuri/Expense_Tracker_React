import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
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
      <h1>Expense Tracker</h1>
      <div className="balance">
        <h2>Balance: ${balance.toFixed(2)}</h2>
      </div>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
