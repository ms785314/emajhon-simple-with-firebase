import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './reviewItem.css';


const ReviewItem = (props) => {
    const {handleRemoveProduct,product} = props;
    const {name,price,shipping,img,quantity} = product;
    
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0,20) + '...' : name}
                    </p>
                    <p>Price: {price}</p>
                    <p><small>quantity: {quantity}</small></p>
                    <p><small>Shipping: {shipping}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon className='delete-btn' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;