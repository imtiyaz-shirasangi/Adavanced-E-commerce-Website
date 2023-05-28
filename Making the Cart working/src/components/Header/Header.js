import { Container, Nav, Navbar, Button, NavLink } from "react-bootstrap";
import React, { useContext } from "react";
import CartContext from "../../storage/CartContext";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            style={{
              textAlign: "center",
              width: "40%",
              color: "white",
            }}
            href="#home"
          ></Navbar.Brand>
          <Nav
            className="me-auto"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              background: "black",
              color: "white",
              wordSpacing: 20,
            }}
          >
            <Nav.Link
              href="home"
              style={{
                marginRight: "25px",
                textDecoration: "none",
                color: "white",
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="store"
              style={{
                marginRight: "25px",
                textDecoration: "none",
                color: "white",
              }}
            >
              STORE
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{
                marginRight: "25px",
                textDecoration: "none",
                color: "white",
              }}
            >
              ABOUT
            </Nav.Link>
            <NavLink
              href="/contact"
              style={{
                marginRight: "25px",
                textDecoration: "none",
                color: "white",
              }}
            >
              CONTACTUS
            </NavLink>

            <Button
              onClick={props.onShowCart}
              variant="outline-info"
              style={{
                marginLeft: "20px",
                padding: "0px 7px",
                background: "lightblue",
                border: "1px solid lightblue",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "end",
                fontSize: "1rem",
                listStyle: "none",
                cursor: "pointer",
              }}
            >
              cart
              <span
                style={{
                  marginLeft: "3px",
                  top: "0",
                }}
              >
                {numberOfCartItems}
              </span>
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <header
        style={{
          textAlign: "center",
          padding: "2rem",
          fontSize: "6.3rem",
          color: "white",
          background: "#777",
        }}
      >
        The Generics
      </header>
    </React.Fragment>
  );
};

export default Header;
