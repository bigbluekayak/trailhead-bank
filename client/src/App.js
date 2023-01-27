import "./App.scss";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react"
import Quote from "./components/quote/quote";
import Application from "./components/application/application";
import Thanks from "./components/thanks/thanks";
import axios from "axios";

function App() {
  const [loan, setLoan] = useState({
    stage: "quote",
    quote: {
      amount: "100",
      term: "12",
      apr: ""
    }
  });

  useEffect(() => {
    if(loan.stage === "application"){
      axios.post("/api/application", loan).then(res => {
        console.debug(res);
        setLoan(state => ({
          ...state,
          stage: "complete"
        }));
      });
    }
  }, [loan.stage]);

  const handleQuote = (quote) => {
    setLoan(state => ({
      ...state,
      quote
    }));
  }

  const handleApply = () => {
    setLoan(state => ({
      ...state,
      stage: "apply"
    }))
  }

  const handApplication = (application) => {
    setLoan(state => ({
      ...state,
      application,
      stage: "application"
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
                  <Quote amount="100" term="12" onQuote={handleQuote} onApply={handleApply} loan={loan} />
                  <Application onApplication={handApplication} loan={loan}/>
                  <Thanks stage={loan.stage}/>
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
