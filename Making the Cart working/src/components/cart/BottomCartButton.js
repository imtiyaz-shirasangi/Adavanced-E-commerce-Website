import React from "react";

function BottomCartButton() {
  return (
    <Button
      style={{
        textAlign: "center",
        justifyContent: "space-between",
        width: "10%",
        marginBottom: "20px",
        padding: "0.2rem",
        color: "#56ccf2",
        scrollbarColor: "auto",
      }}
      onClick={props.onClick}
    >See the Cart</Button>
  );
}

export default BottomCartButton;
