import React from 'react';
import '../css/ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h3>Your Expenses</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <div className="expense-description">{expense.description}</div>
            <div className="expense-amount">${expense.amount.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
