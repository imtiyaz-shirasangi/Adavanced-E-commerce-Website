import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <React.Fragment>
      
      <Header />
      <ProductList/>
    </React.Fragment>
  );
}

export default App;
