import React, { useState, useEffect } from "react";
import {
    Container,
    ProductArea,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductButtons,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductQuantity,
    ProductPrice,
    ProductQtImage,
    ProductQtText

} from "./styled";

export default ({ data, setStatus }) => {
    const [qt, setQt] = useState(1);

    useEffect(() => {
        setQt(1);
    }, [data])

    const handleCancelButton = () => {
        setStatus(false);
    }

    const handleMinusQt = () => {
        if (qt > 1) {
            setQt(qt - 1);
        }
    }

    const handlePlusQt = () => {
        setQt(qt + 1);
    }

    const handleAddToCart = () => {


        setStatus(false);
    }

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName> {data.name} </ProductName>
                        <ProductIngredients> {data.ingredients} </ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage onClick={handleMinusQt} src="/assets/minus.png" />
                            <ProductQtText> {qt} </ProductQtText>
                            <ProductQtImage onClick={handlePlusQt} src="/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * qt).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton} >Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart} >Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}