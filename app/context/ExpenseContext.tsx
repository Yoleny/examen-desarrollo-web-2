"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface Expense {
    idgasto: number;
    categoria: string;
    monto: number;
    fecha: string;
}

interface ExpenseContextType {
    expenses: Expense[];
    setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
    budget: number;
    setBudget: React.Dispatch<React.SetStateAction<number>>;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [budget, setBudget] = useState<number>(0);

    useEffect(() => {
        const fetchExpenses = async () => {
            const response = await axios.get('http://localhost:5000/gasto');
            setExpenses(response.data);
        };
        fetchExpenses();
    }, []);

    return (
        <ExpenseContext.Provider value={{ expenses, setExpenses, budget, setBudget }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export const useExpenseContext = () => {
    const context = useContext(ExpenseContext);
    if (!context) {
        throw new Error('useExpenseContext must be used within an ExpenseProvider');
    }
    return context;
};