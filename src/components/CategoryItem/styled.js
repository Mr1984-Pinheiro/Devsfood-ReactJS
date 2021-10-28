import styled from 'styled-components'

export const Container = styled.div`
    width: 80px;
    height: 80px;
    background-color: ${props => props.active == props.id ? '#FFF' : '#FFDEAD'} ;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-right: 10px;

`;

export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
`;