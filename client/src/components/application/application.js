
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";

export default function Application(props) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      first_name__c: "",
      last_name__c: "",
      email__c: "",
      address_line_1__c: "",
      address_line_2__c: "",
      city__c: "",
      postcode__c: "",
      employment_status__c: "Employed full time",
      annual_income__c: 0,
      residential_status__c: "Homeowner",
      monthly_mortgage_rent__c: 0,
      other_outgoings__c: 0
    }
  });
  
  const onSubmit = data => {
    props.onApplication(data);
  }

  if(props.loan.stage !== "apply"){
    return null;
  }

  return ( 

    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Col>
          <Form.Group id="firstNameGroup">
            <Form.Label htmlFor="first_name__c">First name</Form.Label>
            <Form.Control type="text" placeholder="First name" name="first_name__c" id="first_name__c" {...register("first_name__c", { required: true })} isValid={errors.first_name__c} className={errors.first_name__c && "is-invalid"}/>
          
          </Form.Group>
        </Col>
        <Col>
          <Form.Group id="lastNameGroup">
            <Form.Label htmlFor="last_name__c">First name</Form.Label>
            <Form.Control type="text" placeholder="Last name" name="last_name__c" id="last_name__c" {...register("last_name__c", { required: true })} isValid={errors.last_name__c} className={errors.last_name__c && "is-invalid"}/>
          
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group id="email__cGroup">
          <Form.Label htmlFor="email__c">email__c</Form.Label>
          <Form.Control type="email__c" placeholder="email__c" id="email__c" name="email__c" {...register("email__c", { required: true })} isValid={errors.email__c} className={errors.email__c && "is-invalid"}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group id="address1Group">
            <Form.Label htmlFor="address_line_1__c">Address line 1</Form.Label>
            <Form.Control type="text" placeholder="Address line 1" name="address_line_1__c" id="address_line_1__c" {...register("address_line_1__c", { required: true })} isValid={errors.address_line_1__c} className={errors.address_line_1__c && "is-invalid"}/>
          
          </Form.Group>
        </Col>
        <Col>
          <Form.Group id="address2Group">
            <Form.Label htmlFor="address_line_2__c">Address line 2</Form.Label>
            <Form.Control type="text" placeholder="Address line 2" name="address_line_2__c" id="address_line_2__c" {...register("address_line_2__c")} />
          
          </Form.Group>
        </Col> 
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group id="city__cGroup">
            <Form.Label htmlFor="city__c">Town or city__c</Form.Label>
            <Form.Control type="text" placeholder="Town or city__c" name="city__c" id="city__c" {...register("city__c", { required: true })} isValid={errors.city__c} className={errors.city__c && "is-invalid"}/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group id="postcode__cGroup">
            <Form.Label htmlFor="postcode__c">postcode__c</Form.Label>
            <Form.Control type="text" placeholder="postcode__c" name="postcode__c" id="postcode__c" {...register("postcode__c", { required: true })} isValid={errors.postcode__c} className={errors.postcode__c && "is-invalid"}/>
          </Form.Group>
        </Col> 
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group id="employmentStatusGroup">
            <Form.Label htmlFor="employment_status__c">Employment status</Form.Label>
            <Form.Select id="employment_status__c" name="employment_status__c" {...register("employment_status__c", { required: true })} isValid={errors.employment_status__c} className={errors.employment_status__c && "is-invalid"}>
              <option value="Employed full time">Employed full time</option>
              <option value="Employed part time">Employed part time</option>
              <option value="Unemployed">Unemployed</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col className="mb-3">
          <Form.Group id="annualIncomeGroup">
            <Form.Label htmlFor="annual_income__c">Annual income</Form.Label>
            <InputGroup>
              <InputGroup.Text>£</InputGroup.Text>
              <Form.Control type="number" placeholder="Annual income" id="annual_income__c" name="annual_income__c" {...register("annual_income__c", { required: true })} isValid={errors.annual_income__c} className={errors.annual_income__c && "is-invalid"}/>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      

      <Row className="mb-3">
        <Col>
          <Form.Group id="residentialStatusGroup">
            <Form.Label htmlFor="residential_status__c">Residential status</Form.Label>
            <Form.Select id="residential_status__c" name="residential_status__c" {...register("residential_status__c", { required: true })} isValid={errors.residential_status__c} className={errors.residential_status__c && "is-invalid"}>
            <option value="Homeowner">Homeowner</option>
            <option value="Renting">Renting</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col className="mb-3">
          <Form.Group id="monthlyMortgageOrRentGroup">
            <Form.Label htmlFor="monthly_mortgage_rent__c">Monthly mortgage or rent</Form.Label>
            <InputGroup>
              <InputGroup.Text>£</InputGroup.Text>
              <Form.Control type="number" placeholder="Monthly mortgage or rent" id="monthly_mortgage_rent__c" name="monthly_mortgage_rent__c" {...register("monthly_mortgage_rent__c", { required: true })} isValid={errors.monthly_mortgage_rent__c} className={errors.monthly_mortgage_rent__c && "is-invalid"}/>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group id="otherMonthlyOutgoings">
          <Form.Label htmlFor="other_outgoings__c">Other monthly outgoings</Form.Label>
          <InputGroup>
            <InputGroup.Text>£</InputGroup.Text>
            <Form.Control type="number" placeholder="Other monthly outgoings" id="other_outgoings__c" name="other_outgoings__c" {...register("other_outgoings__c", { required: true })} isValid={errors.other_outgoings__c} className={errors.other_outgoings__c && "is-invalid"}/>
          </InputGroup>
        </Form.Group>        
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}