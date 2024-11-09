import React, { useEffect } from 'react';
import { useExpenseContext } from '../context/ExpenseContext';
import { Alert } from 'react-bootstrap';

const Budget: React.FC = () => {
    const { budget, setBudget, expenses } = useExpenseContext();

    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.monto, 0);

    useEffect(() => {
        if (totalExpenses > budget) {
            alert("Has superado el límite del presupuesto, debes ajustar gasto");
        }
    }, [totalExpenses, budget]);

    return (
        <div>
            <h2>Presupuesto Mensual</h2>
            <input 
                type="number" 
                value={budget} 
                onChange={(e) => setBudget(Number(e.target.value))} 
                placeholder="Establecer presupuesto" 
            />
            <h3>Gastos Totales: {totalExpenses}</h3>
            {totalExpenses >= budget * 0.8 && totalExpenses < budget && (
                <Alert variant="warning">Has alcanzado el 80% de tu presupuesto</Alert>
            )}
        </div>
    );
};

export default Budget;