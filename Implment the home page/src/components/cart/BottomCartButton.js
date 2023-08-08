import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../storage/CartContext";

function BottomCartButton(props) {
  const cartCtx = useContext(CartContext);

  const showItemHandler = (item) => {
    cartCtx.addItem({ ...item });
  };

  return (
    <Button
      style={{
        textAlign: "center",
        justifyContent: "space-between",

        marginBottom: "20px",
        padding: "5px 10px",
        color: "white",
        scrollbarColor: "auto",
        cursor: "pointer",
        background: "black",
        border: "10px solid black",
        // borderRadius: "10px solid black",
      }}
      onClick={showItemHandler}
    >
      See the Cart
    </Button>
  );
}

export default BottomCartButton;
