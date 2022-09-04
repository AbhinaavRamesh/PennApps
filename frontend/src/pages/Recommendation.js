import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Card, Button } from "react-bootstrap";

function Recommendation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Green Fridge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/analytics">Analytics</Nav.Link>
              <Nav.Link href="/recommendation">Recommendation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card style={{ width: '22rem', margin:"auto", marginTop:"1rem" }}>
      <Card.Img style={{height: "15rem", width:"19rem", margin:"auto", marginTop:"1rem"}} variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text style={{fontWeight:"bold", fontSize:23}}>
          Name
        </Card.Text>
        <div style={{display:"flex", flexDirection:"row"}}>
        <Card.Text>
          Some quick example d
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Recommendation;
