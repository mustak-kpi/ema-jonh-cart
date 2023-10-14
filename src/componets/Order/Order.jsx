import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItmes from '../ReviewItmes/ReviewItmes';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faCreditCard} from '@fortawesome/free-solid-svg-icons'



const Order = () => {
     const savedCart = useLoaderData();
     const [cart , setCart] = useState(savedCart)
     console.log(cart)
    
     const removedCart = (id) =>{
       const remining = cart.filter(product => product.id !== id)
     setCart(remining)
    removeFromDb(id);
     }

     const clealshopingCart = ()=>{
      setCart([])
      deleteShoppingCart();
     }
    return (
        <div className='shop-container'>
          <div className='review-container'>
            {
                cart.map(product => <ReviewItmes
                 product={product}
                 removedCart ={removedCart}
                 key={product.id}
                ></ReviewItmes>)
            }
          </div>
          <div className="cart-container">
            <Cart
              cart={cart}
              clealshopingCart={clealshopingCart}
            >
             <Link to='/chackout'>
             <button className='proceed-chackout'>Proceed Checkout
             <FontAwesomeIcon  icon={ faCreditCard} />
             </button>
             </Link>
            </Cart>
          </div>
        </div>
    );
};

export default Order;