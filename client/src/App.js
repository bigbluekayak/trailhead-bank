import "./App.scss";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
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

  function LoanQuote() {
    if(!showApplication) {
      return <div>
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
      </div>
    }
  }

  function ApplicationForm() {
    if(showApplication) {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name="first_name" value={loan.first_name} onChange={onChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" onChange={onChange} />
            </Form.Group>          
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Address line 1</Form.Label>
              <Form.Control type="text" placeholder="Enter address line 1" onChange={onChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Address line 2</Form.Label>
              <Form.Control type="text" placeholder="Enter address line 2" onChange={onChange} />
            </Form.Group>          
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Town or City</Form.Label>
          <Form.Control type="text" placeholder="Town or city" onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Postcode</Form.Label>
          <Form.Control type="text" placeholder="Postcode" onChange={onChange} />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Employment status</Form.Label>
              <Form.Select aria-label="Residential status" onChange={onChange}>
                <option value="Employed full time">Employed full time</option>
                <option value="Employed part time">Employed part time</option>
                <option value="Unemployed">Unemployed</option>
              </Form.Select>
            </Form.Group>          
          </Col>
          <Col>
            <Form.Group className="mb-3">
            <Form.Label>Annual income</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">£</InputGroup.Text>
                <Form.Control
                  placeholder="Annual income"
                  aria-label="Annual income"
                  aria-describedby="Annual income"
                  onChange={onChange}
                />
                </InputGroup>
            </Form.Group>          
          </Col>
        </Row>
        
        
        <Form.Group className="mb-3">
          <Form.Label>Residential status</Form.Label>
          <Form.Select aria-label="Residential status" onChange={onChange}>
            <option value="Homeowner">Homeowner</option>
            <option value="Renting">Renting</option>
          </Form.Select>
        </Form.Group>     

        <Row>
          <Col>
            <Form.Group className="mb-3">
            <Form.Label>Monthly mortgage or rent</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">£</InputGroup.Text>
                <Form.Control
                  placeholder="Monthly mortgage or rent"
                  aria-label="Monthly mortgage or rent"
                  aria-describedby="Monthly mortgage or rent"
                  onChange={onChange}
                />
                </InputGroup>
            </Form.Group>          
          </Col>
          <Col>
            <Form.Group className="mb-3">
            <Form.Label>Other monthly outgoings</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">£</InputGroup.Text>
                <Form.Control
                  placeholder="Other monthly outgoings"
                  aria-label="Other monthly outgoings"
                  aria-describedby="Other monthly outgoings"
                  onChange={onChange}
                />
                </InputGroup>
            </Form.Group>          
          </Col>
        </Row>

        
       
        <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" onClick={(e) => {setShowApplication(true)}}>Submit</Button>
                </div>   
      </Form> );
    }

    
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
                <LoanQuote/>
                <ApplicationForm/>
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
