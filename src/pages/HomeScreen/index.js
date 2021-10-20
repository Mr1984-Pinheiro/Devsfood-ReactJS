import React from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styled';

import Header from '../../components/Header';

export default () => {
    const history = useHistory();


    return (
        <Container>
            <Header />
        </Container>
    );
}

