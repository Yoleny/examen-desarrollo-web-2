import React from 'react';
import { ExpenseProvider } from '../context/ExpenseContext';
import Layout from '../layout';
import Budget from '../components/Budget';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';

const Home: React.FC = () => {
    return (
        <ExpenseProvider>
            <Layout>
                <Budget />
                <ExpenseForm />
                <ExpenseList />
                <ExpenseSummary />
            </Layout>
        </ExpenseProvider>
    );
};

export default Home;