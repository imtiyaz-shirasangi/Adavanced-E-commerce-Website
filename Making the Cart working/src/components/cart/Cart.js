import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  const totalAmount = `$${cartCtx.totalAmount}`;

  return (
    <div
      onClose={props.onClose}
      style={{
        position: "absolute",
        display: "flex",
        margin: "0px",
        top: "50px",
        height: "95%",
        width: "30%",
        right: "0",
        backgroundColor: "white",
        background: "rgb(255,255,255)",
        border: "1px solid rgb(177,103,103)",
      }}
    >
      <div>
        <h2
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontFamily: "monospace",
            padding: "10px",
            margin: "0px",
            color: "black",
          }}
        >
          CART
        </h2>
        <button
          onClick={props.onClose}
          style={{
            margin: "20px",
            color: "black",
            // padding: "5px 7px",
            border: "2px solid black",
            borderRadius: "5px",
            cursor: "pointer",
            position: "absolute",
            top: "0",
            right: "0",
            background: "none",
            fontSize: "16px",
            fontWeight: "700",
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
              borderBottom: "1px solid black",
              marginRight: "9rem",
              marginTop: "10px",
              width: "45%",
              marginLeft: "20px",
              marginBottom: "3px",
            }}
          >
            ITEM
          </span>
          <span
            style={{
              alignItems: "center",
              borderBottom: "1px solid black",
              marginRight: "1.5rem",
              marginTop: "10px",
              width: "45%",
              marginLeft: "20px",
            }}
          >
            PRICE
          </span>
          <span
            style={{
              alignItems: "center",
              borderBottom: "1px solid black",
              marginRight: "1.5rem",
              marginTop: "10px",
              width: "45%",
              marginLeft: "20px",
            }}
          >
            QUANTITY
          </span>
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
                  <button
                    style={{
                      border: "1px solid red",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      color: "white",
                      background: "red",
                      cursor:'pointer',
                    }}
                  >
                    REMOVE
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <span>{totalAmount}</span>
          <h1
            style={{
              fontWeight: "bold",
              marginTop: "50px",
              position: "absolute",
            }}
          >
            Total
          </h1>
        </div>
        <div>
          <button
            style={{
              margin: "20px",
              padding: "5px 10px",
              border: "1px solid black",
              borderRadius: "5px",
              cursor: "pointer",
              color: "white",
              backgroundColor: "black",
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
