import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import {
  add,
  clearCart,
  decreaseCart,
  getTotal,
  orderPlaced,
  removeFromCart,
} from "../Utility/Redux/cartSlice";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cartImage from "../../Assets/emptycart.jpg";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navi = useNavigate();

  const productCount = cart.cartItems.length;

  useEffect(() => {
    dispatch(getTotal());
    // console.log(cart);
  });
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleLess = (item) => {
    dispatch(decreaseCart(item));
  };

  const handleBuy = () => {
    //  navi('/')
    //  console.log(cart);
    //  useEffect(()=>{

    const API = "https://techdips-com.onrender.com/order/addorder";
    console.log("order placed");

    axios.post(API, cart);
    dispatch(orderPlaced());
    //  },[cart])
    // console.log(cart);
  };

  return (
    <div>
      <div className="ecom_cntnr">
        {productCount === 0 ? (
          <div className="empty_cart_disp">
            <img src={cartImage} alt="not found" />
            <div className="empty_cart_text_right">
              <h3>Hey, it feels so light!</h3>
              <p>There's nothing in your cart. Let's add some items.</p>

              <button className="explore_btn" onClick={() => navi("/")}>
                Explore
              </button>
            </div>
          </div>
        ) : (
          <div className="cart_container">
            <h2>Cart</h2>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="product-Price">Price</h3>
              <h3 className="product-Quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => {
                return (
                  <div className="cart-item" key={cartItem.ide}>
                    <div className="cart-product">
                      <img src={cartItem.image} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.p_name}</h3>
                        <p>{cartItem.title}</p>
                        <button onClick={() => handleRemove(cartItem)}>
                          <i class="fa-solid fa-xmark" id="remove"></i>
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">₹ {cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button
                        className="addbtn"
                        onClick={() => handleLess(cartItem)}
                      >
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button
                        className="addbtn"
                        onClick={() => handleAdd(cartItem)}
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      ₹ {cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-summary">
              <button onClick={handleClearCart} className="clear-cart">
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="sub-total">
                  <span>Sub total</span>
                  <span className="amount">₹ {cart.cartTotalAmount}</span>
                  <button onClick={handleBuy}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
