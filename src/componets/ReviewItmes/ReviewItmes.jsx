import React from 'react';
import './ReviewItmes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewItmes = ({product,  removedCart}) => {
    const {id, img, name, price,quantity} = product;
    return (
        <div className='Review-itmes'>
          <img src={img} alt="" />
         <div className="review-ditiels">
            <p className='products-titls'>{name}</p>
            <p>price <span className='review-info'>${price}</span></p>
            <p>order quantity <span className='review-info'>${quantity}</span></p>
         </div>
         <button className='btn-button'>
         <FontAwesomeIcon onClick={()=> removedCart(id)} className='button-icon' icon={faTrashAlt} />
         </button>
        </div>
    );
};

export default ReviewItmes;