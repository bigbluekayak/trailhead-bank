import "./App.scss";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react"
import Quote from "./components/quote/quote";

function App() {
  const [loan, setLoan] = useState();
  const [stage, setStage] = useState("quote")

  const handleQuote = (quote) => {
    setLoan(state => ({
      ...state,
      quote
    }));
  }

  return (
    <>
    <Navbar variant="dark" className="glass">
      <Container fluid>
        <Navbar.Brand>
          <span className="title">Trailhead Bank</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#accounts">Accounts</Nav.Link>
            <Nav.Link href="#loans">Loans</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container fluid className="mt-3">
        <Row className="justify-content-center">
          <Col xs="10" md="8" lg="6">
            <Card className="glass glass-border">
              <Card.Body className="text-light">
                  <Quote amount="100" term="12" onQuote={handleQuote} stage={stage} />
                  
              </Card.Body>
              
            </Card>
          </Col>
          <Row className="justify-content-center">
            <Col xs="6" className="text-center">
              <img src="/built-on-heroku-light.svg" alt="Powered by Heroku" width="250" />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default App;
