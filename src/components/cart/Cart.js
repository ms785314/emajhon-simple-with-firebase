import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let totlaPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    // console.log(props.children);
    for(let product of cart){
        // console.log(product);
        quantity = quantity + product.quantity;
        totlaPrice = totlaPrice + product.price*product.quantity;
        totalShipping = totalShipping + product.shipping;
    }
    // console.log(quantity);
    const tax = (totlaPrice*.1).toFixed(2);
    const grandTotal = totalShipping + totlaPrice + (+tax);
    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <h3>selected items: {quantity} </h3>
            <p>Total Price: {totlaPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: {grandTotal}</h3>
            {
                props.children
            }
        </div>
    );
};

export default Cart;