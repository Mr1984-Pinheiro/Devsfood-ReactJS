import React from 'react';
import { Container, ModalBody } from './styled'

export default ({ status, children }) => {
    return (
        <Container status={status}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    );
}