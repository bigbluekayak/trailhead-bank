const onChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setLoan(existingValues => ({
    ...existingValues,
    [name]: value
  }));
}

function ApplicationForm(props) {
    if(showApplication) {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" key="first_name" id="first_name" name="first_name" value={loan.first_name} onChange={onChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" id="last_name" name="last_name" value={loan.last_name} onChange={onChange} />
            </Form.Group>          
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" id="email" name="email" value={loan.email} onChange={onChange} />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Address line 1</Form.Label>
              <Form.Control type="text" placeholder="Enter address line 1" id="address_line_1" name="address_line_1" value={loan.address_line_1} onChange={onChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Address line 2</Form.Label>
              <Form.Control type="text" placeholder="Enter address line 2" id="address_line_2" name="address_line_2" value={loan.address_line_2} onChange={onChange} />
            </Form.Group>          
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Town or City</Form.Label>
              <Form.Control type="text" placeholder="Town or city" id="city" name="city" value={loan.city} onChange={onChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Postcode</Form.Label>
              <Form.Control type="text" placeholder="Postcode" id="postcode" name="postcode" value={loan.postcode} onChange={onChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Employment status</Form.Label>
              <Form.Select aria-label="Employment status" id="employment_status" name="employment_status" value={loan.employment_status} onChange={onChange} placeholder="Select">
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
                  id="annual_income"
                  name="annual_income"
                  value={loan.annual_income}
                  onChange={onChange}
                />
                </InputGroup>
            </Form.Group>          
          </Col>
        </Row>
        
        <Row>

        
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Residential status</Form.Label>
              <Form.Select aria-label="Residential status" id="residential_status" name="residential_status" value={loan.residential_status} onChange={onChange}>
                <option value="Homeowner">Homeowner</option>
                <option value="Renting">Renting</option>
              </Form.Select>
            </Form.Group>     
          </Col>
          <Col>
            <Form.Group className="mb-3">
                <Form.Label>Monthly mortgage or rent</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">£</InputGroup.Text>
                    <Form.Control
                      placeholder="Monthly mortgage or rent"
                      aria-label="Monthly mortgage or rent"
                      aria-describedby="Monthly mortgage or rent"
                      id="monthly_mortgage_rent"
                      name="monthly_mortgage_rent"
                      value={loan.monthly_mortgage_rent}
                      onChange={onChange}
                    />
                  </InputGroup>
              </Form.Group>             
          </Col>
        </Row>

            <Form.Group className="mb-3">
            <Form.Label>Other monthly outgoings</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">£</InputGroup.Text>
                <Form.Control
                  placeholder="Other monthly outgoings"
                  aria-label="Other monthly outgoings"
                  aria-describedby="Other monthly outgoings"
                  id="other_outgoings"
                  name="other_outgoings"
                  value={loan.other_outgoings}
                  onChange={onChange}
                />
                </InputGroup>
            </Form.Group>
        <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" onClick={(e) => {setShowApplication(true)}}>Submit</Button>
                </div>   
      </Form> );
    }

    
  }