import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
  
const Product = (props) => {
    const {handleCart} = props;
    // console.log(props.product);
    const {name,price,seller ,ratings,img} = props.product;
    // console.log(name,ratings,seller);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
            <button onClick={() => handleCart(props.product)} className='cart-btn'>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;