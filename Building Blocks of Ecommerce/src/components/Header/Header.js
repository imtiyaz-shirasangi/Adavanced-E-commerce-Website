import React from "react";

import {
  Container,
  Nav,
  Navbar,
  Button,
  Alert,
  NavLink,
} from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar
        bg="dark"
        variant="
            dark"
      >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me auto">
            <NavLink href="#home">HOME</NavLink>
            <NavLink href="#store">STORE</NavLink>
            <Nav.Link href="store">STORE</Nav.Link>
            <Nav.Link href="about">ABOUT</Nav.Link>
            <Button variant="outline-info">cart</Button>
          </Nav>
        </Container>
      </Navbar>
      <Alert className="bg-secondarty text-white">
        <h1><Alert.Heading>The Generics</Alert.Heading></h1>
      </Alert>
    </React.Fragment>
  );
};
export default Header;
