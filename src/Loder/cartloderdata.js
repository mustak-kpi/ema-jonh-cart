import { getShoppingCart } from "../utilities/fakedb";

const cartloderdata = async ()=>{
    const lodardata = await fetch ('products.json');
    const products = await lodardata.json()
    console.log(products)


    const strodecart = getShoppingCart();
    const sevecart = [];
    for(const id in strodecart){
        const addproducts = products.find(product => product.id === id);
        if(addproducts){
            const quantity = strodecart[id];
             addproducts.quantity = quantity;
             sevecart.push(addproducts)
        }
    }
    // console.log(strodecart)
   return sevecart;
}

export default cartloderdata;