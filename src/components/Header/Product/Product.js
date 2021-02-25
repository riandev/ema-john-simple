import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {img,name,seller,price,stock}=props.product;
  return (
    <div className='pd-container'>
      <div className='pd-img'>
          <img src={img} alt=""/>
      </div>
      <div className='pd-details'>
        <h4 className='pd-title'>{name}</h4>
        <br/>
        <p><small>by: {seller}</small></p>
        <h5>${price}</h5>
        <p><small>only {stock} left in stock - order soon</small></p>
        <button onClick={() => props.cartbtn(props.product)} className='main-btn'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
