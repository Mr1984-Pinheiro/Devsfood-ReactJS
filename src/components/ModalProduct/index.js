import React from "react";
import {
    Container,
    ProductArea,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductButtons

} from "./styled";

export default () => {
    return (
        <Container>
            <ProductArea>
                <ProductPhoto src="" />
                <ProductInfoArea>
                    <ProductDetails>

                    </ProductDetails>
                    <ProductQuantityArea>

                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>

            </ProductButtons>
        </Container>
    );
}