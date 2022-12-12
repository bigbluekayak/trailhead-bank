import "./App.scss";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react"
import { currency, quote } from "./helpers/helpers";

function App() {

  const [loan, setLoan] = useState({
    amount: 100,
    term: 12,
    apr: 2.9
  });

  const [showApplication, setShowApplication] = useState(false);

  const onChange = (e) => {
    const fieldName = e.target.name;
    setLoan(existingValues => ({
      ...existingValues,
      [fieldName]: e.target.value,
      apr: quote(loan.term)
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
                <p className="text-center">Complete this form to get a quote for loans ranging from £100 to £15,000.</p>
                <Form.Label htmlFor="amount">Loan Amount</Form.Label>
                <Form.Range name="amount" id="amount" min="100" max="15000" step="100" value={loan.amount} onChange={onChange} disabled={showApplication} />
                <Form.Label htmlFor="term">Loan Term</Form.Label>
                <Form.Range name="term" id="term" min="12" max="48" step="6" value={loan.term} onChange={onChange} disabled={showApplication} />
                <dl>
                  <dt>Loan Amount</dt>
                  <dd>{currency("en-GB", "GBP", loan.amount)}</dd>
                  <dt>Term (Months)</dt>
                  <dd>{loan.term}</dd>
                  <dt>APR</dt>
                  <dd>{loan.apr}</dd>
                  <dt>Monthly payments</dt>
                  <dd>{currency("en-GB", "GBP", loan.amount)}</dd>
                  <dt>Total cost of credit</dt>
                  <dd>{currency("en-GB", "GBP", loan.amount)}</dd>
                </dl>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" onClick={(e) => {setShowApplication(true)}}>Apply now</Button>
                </div>
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
