import styled from "styled-components";

export const Container = styled.div`
    width: 740px;
    padding: 10px;
    
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
    height: 50px;
    background-color: #0000FF;
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
 border-radius: 10px;
 font-size: 22px;
 font-weight: bold;
 padding: 10px 20px;

`;

