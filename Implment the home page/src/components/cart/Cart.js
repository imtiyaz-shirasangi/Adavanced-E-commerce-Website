import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
// import Modal from "./Modal";

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

  const removeItemHandler = (id) => {
    console.log(id);
    cartCtx.removeItem(id);
  };

  return (
    <div
      onClose={props.onClose}
      style={{
        position: "fixed",
        scrollBehavior: "auto",
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
        <h2
          style={{
            margin: "20px 0px",
            padding: "0",
          }}
        >
          CART
        </h2>
        <button
          onClick={props.onClose}
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            background: "lightblack",
            cursor: "pointer",
            fontSize: "16px",
            padding: "5px",
            fontWeight: "700",
            margin: "20px",
          }}
        >
          X
        </button>
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              alignItems: "center",
              font: "bold",
              marginRight: "1.5rem",
              paddingBottom: "0px",
              marginTop: "10px",
              borderBottom: "1px solid black",
            }}
          >
            ITEM
          </span>
          <span
            style={{
              alignItems: "center",
              font: "bold",
              marginRight: "1.5rem",
              paddingBottom: "0px",
              marginTop: "10px",
              borderBottom: "1px solid black",
            }}
          >
            PRICE
          </span>
          <span
            style={{
              alignItems: "center",
              font: "bold",
              marginRight: "1.5rem",
              paddingBottom: "0px",
              marginTop: "10px",
              borderBottom: "1px solid black",
            }}
          >
            QUANTITY
          </span>
        </div>
        {/* Add your cart item components or logic here */}
        <div>
          {cartCtx.items.map((prod) => (
            <div
              style={{
                fontSize: "1px",
                display: "flex",
              }}
              key={prod.id}
            >
              <div>
                <span
                  style={{
                    alignItems: "center",
                    marginTop: "10px",
                    paddingBottom: "10px",
                    marginRight: "1.5rem",
                    // borderBottom:'1px solid black'
                  }}
                >
                  <img
                    style={{
                      padding: "3.5px",
                      width: "100px",
                      borderRadius: "8%",
                      marginRight: "20px",
                    }}
                    src={prod.imageUrl}
                    alt={prod.title}
                  />
                  <span>{prod.title}</span>
                </span>
                <span>{prod.price}</span>
                <span>
                  <span>{prod.quantity}</span>
                  <button
                    onClick={() => removeItemHandler(prod.id)}
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      background: "red",
                      cursor: "pointer",
                      border: "none",
                      borderRadius: "8%",
                      height: "30px",
                      outline: "none",
                      padding: "0px 7px",
                    }}
                  >
                    REMOVE
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            fontSize: "1.2rem",
            margin: "20px",
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              margin: "0",
              padding: "0",
            }}
          >
            {totalAmount}
          </span>
          <h1
            style={{
              marginRight: "10px",
              fontSize: "1.5rem",
            }}
          >
            Total
          </h1>
        </div>
        <div>
          <button
            style={{
              display: "flex",
              alignitems: "center",
              justifycontent: "center",
              margin: "auto",
              margintop: "50px",
              background: "#56CCF2",
              color: "white",
              fontsize: "1.2rem",
              fontweight: "bold",
              border: "none",
              borderradius: "10%",
              padding: "12px",
              cursor: "pointer",
            }}
          >
            PURCHASE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
