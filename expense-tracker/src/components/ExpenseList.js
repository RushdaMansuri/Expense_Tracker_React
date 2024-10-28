import React from 'react';
import '../css/ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span>{expense.description}</span>
            <span>${expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
