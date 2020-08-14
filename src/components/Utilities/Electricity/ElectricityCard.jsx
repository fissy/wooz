import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../../Calendar'
import ButtonToggle from '../../SearchTabFormSection/ButtonToggle'

function ElectricityCard() {

    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

    setValidated(true);
    };
   
    return (
        <div>
            <Card>
                <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                    {/* <p style={{color: '#389aff'}}> <b>Main Passenger (Adult)</b> </p>
                    <hr style={{color: '#389aff'}}/> */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row  className="justify-content-md-center">
                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>State <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                
                                <Form.Control as='select'>
                                    <option>Select Electricity Distributor</option>
                                    <option>Abuja Electricity Distribution Company plc</option>
                                    <option>Benin Electricity Distribution Company plc</option>
                                    <option>Eko Electricity Distribution Company plc</option>
                                    <option>Enugu Electricity Distribution Company plc</option>
                                    <option>Ibadan Electricity Distribution Company plc</option>
                                    <option>Ikeja Electricity Distribution Company plc</option>
                                    <option>Jos Electricity Distribution Company plc</option>
                                    <option>Kano Electricity Distribution Company plc</option>
                                    <option>Kaduna Electricity Distribution Company plc</option>
                                    <option>Port Harcourt Electricity Distribution Company plc</option>
                                    <option>Yola Electricity Distribution Company plc</option>
                                </Form.Control>
                                
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>Meter Number <span style={{fontSize: '12px'}}>(Optional)</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" placeholder='Enter Meter Number' />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>Account/Meter Package <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control as='select'>
                                    <option>Preferred Package</option>
                                    <option>Prepaid</option>
                                </Form.Control>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="7" controlId="validationCustomUsername">
                                <Form.Label> <h6> How Much Electricity Do You Want To Buy? <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup>
                                    <InputGroup.Append>
                                        <Button variant="dark">
                                            &#8358;
                                        </Button>
                                    </InputGroup.Append>
                                    <FormControl placeholder="Enter value amount 'e.g. &#8358;10,000.00'" aria-describedby="basic-addon1" ></FormControl>
                                    <Form.Control.Feedback type="invalid"> Enter a valid phone number. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="7" controlId="validationCustomUsername">
                                <Form.Label> <h6> Phone Number (Optional) <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup >
                                    <InputGroup.Prepend>
                                        <PhoneInput style={{width: '500px'}} inputProps={{ name: 'phone', required: true, autoFocus: false }} />
                                    </InputGroup.Prepend>
                                    <Form.Control.Feedback type="invalid"> Enter a valid phone number. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            
                        </Form.Row>
                    </Form>
                </div>
            </Card>
        </div>
        
    )
}

export default ElectricityCard
