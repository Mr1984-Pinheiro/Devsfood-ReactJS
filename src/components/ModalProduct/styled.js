import styled from "styled-components";

export const Container = styled.div`
    width: 650px;
    padding: 20px;
    
`;

export const ProductArea = styled.div`
    height: 200px;
     
    display: flex;
`;
export const ProductButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 15px;
    
`;

export const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
`;


export const ProductDetails = styled.div`

`;
export const ProductQuantityArea = styled.div`
    display: flex;
    justify-content: space-between;
`;


export const ProductName = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: #FA8072;
`;


export const ProductIngredients = styled.div`
    font-size: 14px;
`;

export const ProductButton = styled.button`
 margin-left: 15px;
 background-color:  #FA8072;
 color: #FFF;
 border: 0;
 box-shadow: 4px 5px 0px #999;
 border-radius: ${props => props.small ? '5px' : '10px'};
 font-size: ${props => props.small ? '13px' : '22px'};
 font-weight: bold;
 padding: ${props => props.small ? '5px 10px' : '10px 20px'};
 cursor: pointer;

`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color:  #FA8072;
    border-radius: 5px;
    
`;

export const ProductQtImage = styled.img`
    width: 24px;
    height: auto;
    color: #000;
     margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

export const ProductQtText = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #FFF;
   
`;


export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`;





