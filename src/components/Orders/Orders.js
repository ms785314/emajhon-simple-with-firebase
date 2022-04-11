import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    // console.log(cart);
    // console.log(products);

    const handleRemoveProduct = product => {
        console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id);
    }
    return (
        <div>


            <div className="shop">
                <div className="order-container">
                    {
                        cart.map(product => <ReviewItem key={product.id}product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/inventory'>
                            <button>Procced Check</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;