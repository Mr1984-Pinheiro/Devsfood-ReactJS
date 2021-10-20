import React from 'react';
import { Container, Logo, SearchInput } from './styled'

export default () => {
    return (
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput type="text" placeholder="Digite um produto..." />
        </Container>
    );
}
