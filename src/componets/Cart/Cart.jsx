import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart , clealshopingCart, children}) => {
    let pricetotal = 0;
    let totalshping = 0;
    let quantity = 0;
    for(const products of cart){
       if(products.quantity===0){
              products.quantity = 1 ;
       }
      // products.quantity = products.quantity || 1
      pricetotal = pricetotal + products.price * products.quantity;
      totalshping = totalshping + products.shipping;
      quantity = quantity + products.quantity;
    }
    const  tex = pricetotal*6/100;
    const Grendetotal = pricetotal + tex + totalshping;
    return (
        <div className='cart'>
              <h4 className='titles'>Oreder smmirey</h4>
                <p>selected itmes: {quantity}</p>
                <p>total price: ${pricetotal.toFixed(2)}</p>
                <p>total shipping: ${totalshping}</p>
                <p>trx:${tex}</p>
                <h6 className='Grende-total'>Grende total: ${Grendetotal.toFixed(2)}</h6>
                <button onClick={clealshopingCart} className='btn-clear-itmes'> 
                  <span>
                  clear cart
                  </span>
                 {/* <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> */}
                 <FontAwesomeIcon  icon={faTrashAlt} />
                </button>
                {children}
        </div>
    );
};

export default Cart;