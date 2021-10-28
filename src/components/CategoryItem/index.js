import React from 'react'
import { Container, CategoryImage } from './styled'

export default ({ data, activeCategory }) => {
    return (
        <Container active={activeCategory} id={data.id} >
            <CategoryImage src={data.image} />
        </Container>
    );
}
