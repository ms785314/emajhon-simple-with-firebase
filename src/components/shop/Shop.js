import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const handleCart = (selectedProduct) => {
        // selectedProduct is an object



        // selectedProduct er id ta jodi already cart e na thake, tahole tar quantity 1 set korbo.. jodi thake already tahole tar quantity ager quantity + 1 korbo
        const exists = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);

            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    const [products, setProducts] = useProducts();
    useEffect(() => {
        const getStoredCart = getShoppingCart();
        // console.log(typeof getStoredCart);
        let savedCart = [];
        for (let id in getStoredCart) {
            // console.log(getStoredCart); 
            // console.log(products);

            const storedProduct = products.find(product => product.id === id);
            if (storedProduct) {
                // console.log('stored: ',storedProduct);
                const qty = getStoredCart[id];
                storedProduct.quantity = qty;
                savedCart.push(storedProduct);
            }
        }
        if (savedCart.length) {
            // saved cart is an array
            setCart(savedCart)
        }
    }, [products])

    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleCart={handleCart}
                    ></Product>)
                }
            </div>


            <div className="cart-container">
                {/* cart is an array */}
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>
                            Review Order
                        </button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Shop;