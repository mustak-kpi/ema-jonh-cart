import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
   const {img, name, price, ratings, seller} = props.product
   const addtoProducts = props.addtoProducts

    return (
        <div className='products'>
      <img src={img} alt="" />
     <div className='products-info'>
     <h6 className='products-name'>{name}</h6>
     <h6>price: ${price}</h6>
      <p>Manufacturer: {seller}</p>
      <p>Retings:${ratings} stares</p>
     </div>
     <button className='button-cart' 
        onClick={()=>addtoProducts(props.product) }
      >ADD To Cart <FontAwesomeIcon icon={faShoppingCart} />
 </button>
        </div>
    );
};

export default Products;