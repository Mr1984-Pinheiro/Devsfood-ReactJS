import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";


import {
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    CartDown

} from './styled'

export default () => {
    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(false);

    const handleCartClick = () => {
        setShow(!show);
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick} >
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu carrinho ({products.length})</CartText>
                <CartDown src="/assets/down.png" />
            </CartHeader>
            <CartBody show={show} >
                corpo do carrinho
            </CartBody>
        </CartArea>
    );
}