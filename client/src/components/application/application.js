
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";

export default function Application(props) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      postcode: "",
      employment_status: "Employed full time",
      annual_income: 0,
      residential_status: "Homeowner",
      monthly_mortgage_rent: 0,
      other_outgoings: 0
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
            <Form.Label htmlFor="first_name">First name</Form.Label>
            <Form.Control type="text" placeholder="First name" name="first_name" id="first_name" {...register("first_name", { required: true })} isValid={errors.first_name} className={errors.first_name && "is-invalid"}/>
          
          </Form.Group>
        </Col>
        <Col>
          <Form.Group id="lastNameGroup">
            <Form.Label htmlFor="last_name">First name</Form.Label>
            <Form.Control type="text" placeholder="Last name" name="last_name" id="last_name" {...register("last_name", { required: true })} isValid={errors.last_name} className={errors.last_name && "is-invalid"}/>
          
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group id="emailGroup">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control type="email" placeholder="Email" id="email" name="email" {...register("email", { required: true })} isValid={errors.email} className={errors.email && "is-invalid"}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group id="address1Group">
            <Form.Label htmlFor="address_line_1">Address line 1</Form.Label>
            <Form.Control type="text" placeholder="Address line 1" name="address_line_1" id="address_line_1" {...register("address_line_1", { required: true })} isValid={errors.address_line_1} className={errors.address_line_1 && "is-invalid"}/>
          
          </Form.Group>
        </Col>
        <Col>
          <Form.Group id="address2Group">
            <Form.Label htmlFor="address_line_2">Address line 2</Form.Label>
            <Form.Control type="text" placeholder="Address line 2" name="address_line_2" id="address_line_2" {...register("address_line_2")} />
          
          </Form.Group>
        </Col> 
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group id="cityGroup">
            <Form.Label htmlFor="city">Town or city</Form.Label>
            <Form.Control type="text" placeholder="Town or city" name="city" id="city" {...register("city", { required: true })} isValid={errors.city} className={errors.city && "is-invalid"}/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group id="postcodeGroup">
            <Form.Label htmlFor="postcode">Postcode</Form.Label>
            <Form.Control type="text" placeholder="Postcode" name="postcode" id="postcode" {...register("postcode", { required: true })} isValid={errors.postcode} className={errors.postcode && "is-invalid"}/>
          </Form.Group>
        </Col> 
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group id="employmentStatusGroup">
            <Form.Label htmlFor="employment_status">Employment status</Form.Label>
            <Form.Select id="employment_status" name="employment_status" {...register("employment_status", { required: true })} isValid={errors.employment_status} className={errors.employment_status && "is-invalid"}>
              <option value="Employed full time">Employed full time</option>
              <option value="Employed part time">Employed part time</option>
              <option value="Unemployed">Unemployed</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col className="mb-3">
          <Form.Group id="annualIncomeGroup">
            <Form.Label htmlFor="annual_income">Annual income</Form.Label>
            <InputGroup>
              <InputGroup.Text>£</InputGroup.Text>
              <Form.Control type="number" placeholder="Annual income" id="annual_income" name="annual_income" {...register("annual_income", { required: true })} isValid={errors.annual_income} className={errors.annual_income && "is-invalid"}/>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      

      <Row className="mb-3">
        <Col>
          <Form.Group id="residentialStatusGroup">
            <Form.Label htmlFor="residential_status">Residential status</Form.Label>
            <Form.Select id="residential_status" name="residential_status" {...register("residential_status", { required: true })} isValid={errors.residential_status} className={errors.residential_status && "is-invalid"}>
            <option value="Homeowner">Homeowner</option>
            <option value="Renting">Renting</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col className="mb-3">
          <Form.Group id="monthlyMortgageOrRentGroup">
            <Form.Label htmlFor="monthly_mortgage_rent">Monthly mortgage or rent</Form.Label>
            <InputGroup>
              <InputGroup.Text>£</InputGroup.Text>
              <Form.Control type="number" placeholder="Monthly mortgage or rent" id="monthly_mortgage_rent" name="monthly_mortgage_rent" {...register("monthly_mortgage_rent", { required: true })} isValid={errors.monthly_mortgage_rent} className={errors.monthly_mortgage_rent && "is-invalid"}/>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group id="otherMonthlyOutgoings">
          <Form.Label htmlFor="other_outgoings">Other monthly outgoings</Form.Label>
          <InputGroup>
            <InputGroup.Text>£</InputGroup.Text>
            <Form.Control type="number" placeholder="Other monthly outgoings" id="other_outgoings" name="other_outgoings" {...register("other_outgoings", { required: true })} isValid={errors.other_outgoings} className={errors.other_outgoings && "is-invalid"}/>
          </InputGroup>
        </Form.Group>        
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}