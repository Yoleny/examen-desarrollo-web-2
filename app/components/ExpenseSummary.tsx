import React from 'react';
import { useExpenseContext } from '../context/ExpenseContext';

const ExpenseSummary: React.FC = () => {
    const { expenses } = useExpenseContext();

    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.monto, 0);

    return (
        <div>
            <h2>Resumen de Gastos</h2>
            <p>Total Gastos: {totalExpenses}</p>
         
        </div>
    );
};

export default ExpenseSummary;