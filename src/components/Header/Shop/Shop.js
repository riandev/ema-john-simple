import React, { useState } from 'react';
import fakeData from '../../../fakeData/index';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../../Cart/Cart';

const Shop = () => {
    const firstTen=fakeData.slice(0,10);
    const [products,setProduct]=useState(firstTen);
    
    const [cart,setCart]=useState([]);
    
    const productButtonHandle=(product)=>{
        console.log('clicked',product);
        const newCart=[...cart,product]
        setCart(newCart)
    }
    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                    {
                        products.map(pd => <Product product={pd} cartbtn={productButtonHandle}></Product>)
                    }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;