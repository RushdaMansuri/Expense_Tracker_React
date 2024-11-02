import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';
import '../css/ExpenseList.css';

const ExpenseList = ({ initialExpenses = [] }) => { // Default to an empty array
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="expense-page">
      <Header />
      <main className="expense-list">
        <h3>Your Expenses</h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              <div className="expense-description">{expense.description}</div>
              <div className="expense-amount">${expense.amount.toFixed(2)}</div>
            </li>
          ))}
        </ul>
        <ExpenseForm addExpense={addExpense} />
      </main>
      <Footer />
    </div>
  );
};

export default ExpenseList;
