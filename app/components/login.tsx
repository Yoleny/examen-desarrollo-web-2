import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button, Alert } from 'react-bootstrap';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
      
        if (username === 'admin' && password === 'admin123') {
            router.push('/'); 
        } else {
            setError(true); 
        }
    };

    return (
        <Form onSubmit={handleLogin}>
            {error && <Alert variant="danger">Usuario o contraseña incorrecta</Alert>}
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingrese su usuario" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Ingrese su contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Iniciar Sesión
            </Button>
        </Form>
    );
};

export default Login;