import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";

// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },
//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  const totalAmount = `$${cartCtx.totalAmount}`;

  return (
    <div
      onClose={props.onClose}
      style={{
        position: "fixed",
        display: "flex",
        margin: "0px",
        top: "50px",
        height: "95%",
        right: "0",
        background: "rgb(255,255,255)",
        border: "1px solid rgb(177,103,103)",
      }}
    >
      <div>
        <h2>CART</h2>
        <button onClick={props.onClose}>X</button>
        <div>
          <span>ITEM</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
        </div>
        {/* Add your cart item components or logic here */}
        <div>
          {cartCtx.items.map((prod) => (
            <div>
              <div>
                <span>
                  <img src={prod.imageUrl} alt={prod.title} />
                  <span>{prod.title}</span>
                </span>
                <span>{prod.price}</span>
                <span>
                  <span>{prod.quantity}</span>
                  <button>REMOVE</button>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <span>{totalAmount}</span>
          <h1>Total</h1>
        </div>
        <div>
          <button>PURCHASE</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
