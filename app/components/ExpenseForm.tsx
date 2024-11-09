import React, { useState } from 'react';
import axios from 'axios';
import { useExpenseContext } from '../context/ExpenseContext';
import { Form, Button } from 'react-bootstrap';


// eslint-disable-next-line @typescript-eslint/no-unused-vars

function ExpenseForm() {
    const { expenses, setExpenses } = useExpenseContext();
    const [categoria, setCategoria] = useState('');
    const [monto, setMonto] = useState<number | ''>('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newExpense = { categoria, monto: Number (monto), fecha };

        await axios.post('http://localhost:5000/gasto', newExpense);

        setExpenses([...expenses, newExpense]);
        setCategoria('');
        setMonto('');
        setFecha('');
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCategoria">
                <Form.Label>Categoría</Form.Label>
                <Form.Control
                    type="text"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    placeholder="Ingrese categoría" />
            </Form.Group>
            <Form.Group controlId="formMonto">
                <Form.Label>Monto</Form.Label>
                <Form.Control
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                    placeholder="Ingrese monto" />
            </Form.Group>
            <Form.Group controlId="formFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Gasto
            </Button>
        </Form>
    );
}

export default ExpenseForm;