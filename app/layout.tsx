import React from 'react';
import { Container } from 'react-bootstrap';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Container>
            <h1>Administrador de Gastos Personales</h1>
            {children}
        </Container>
    );
};

export default Layout;