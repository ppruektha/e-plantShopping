import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CreatSlice';
import './CartItem.css';

const Cart = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();


  const getNumericCost = (cost) => {
    return parseFloat(cost.replace('$', ''));
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cart.forEach((item)=> {
        totalAmount += item.quantity*getNumericCost(item.cost);
    });
    return totalAmount;
  };

  

  const handleContinueShopping = (e) => {
    onContinueShopping();
  };

  const handleCheckoutShopping = (e) => {
  alert('Coming Soon');
  };


  const handleIncrement = (item) => {
    let newItemQuantity = item.quantity +1;
    dispatch(updateQuantity({ name: item.name, quantity: newItemQuantity }));
    
  };

  const handleDecrement = (item) => {
    if(item.quantity>1){
      let newItemQuantity = item.quantity -1;
      dispatch(updateQuantity({ name: item.name, quantity: newItemQuantity }));
    }else{
        dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    let totalCost = 0;
        totalCost = item.quantity*getNumericCost(item.cost);;
    return totalCost;
  };

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cart-container" id="cartItem">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <a href='#top' className="get-started-button1"> Continue Shopping</a>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;


