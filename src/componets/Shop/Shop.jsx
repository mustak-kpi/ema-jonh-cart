import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'



const Shop = () => {
    const [products, setProducts ] = useState([]);
    const [cart , setCart] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect( ()=>{
      const stroedCart = getShoppingCart()
      const  sevedCart = []
       for(const id in stroedCart){
          const addedproducts = products.find(product => product.id ===id)
          if(addedproducts){
            const quantity = stroedCart[id];
            addedproducts.quantity = quantity;
           sevedCart.push(addedproducts)
          }
       }
       setCart(sevedCart);
    },[products])

    const clealshopingCart = ()=>{
      setCart([])
      deleteShoppingCart()
     }

    const addtoProducts = (product) =>{
        //  const newCart = [...cart , product]
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
          product.quantity = 1;
          newCart=[...cart, product]
        }
        else{
          exists.quantity = exists.quantity + 1;
          const remaaining = cart.filter(pd => pd.id !== product.id);
          newCart=[...remaaining, exists];
        }
         setCart(newCart)
        //  console.log(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="post-container">
              {
                products.map(product =>  <Products
                key ={product.id}
                product={product}
                addtoProducts={addtoProducts}
                ></Products>)
              }
           
            </div>
            <div className="cart-container">
              <Cart    
              cart={cart}
              clealshopingCart={clealshopingCart}
              >
               <Link to='/Order'>
                <button className='proceed-chackout'>Review Order
                <FontAwesomeIcon  icon={faArrowRight} />
                </button>
               </Link>
              </Cart>
            </div>
        </div>
    );
};

export default Shop;