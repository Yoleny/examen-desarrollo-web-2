import React from 'react';
import { useExpenseContext } from '../context/ExpenseContext';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const ExpenseList: React.FC = () => {
    const { expenses, setExpenses } = useExpenseContext();

    const handleDelete = async (idgasto: number) => {
        await axios.delete(`http://localhost:5000/gasto/${idgasto}`);
        setExpenses(expenses.filter(expense => expense.idgasto !== idgasto));
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Categoría</th>
                    <th>Monto</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => (
                                       <tr key={expense.idgasto}>
                                       <td>{expense.categoria}</td>
                                       <td>{expense.monto}</td>
                                       <td>{expense.fecha}</td>
                                       <td>
                                           <Button variant="danger" onClick={() => handleDelete(expense.idgasto)}>
                                               Eliminar
                                           </Button>
                                       </td>
                                   </tr>
                               ))}
                           </tbody>
                       </Table>
                   );
               };
               
               export default ExpenseList;