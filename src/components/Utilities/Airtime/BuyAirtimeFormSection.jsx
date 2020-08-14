import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../../Calendar'
// import Stepper from 'react-stepper-horizontal'

// import SelectTabForm from './FlightSelectTab'
import AirtimeMultiStepper from '../../MultiStepper/AirtimeMultiStepper'

class BuyAirtimeFormSection extends Component {
    render() {
        return (
            <div>
                {/* <div className='container-fluid'> */}
                <Container style={{marginTop: '-107px', width: '1115px' }}>
                    <AirtimeMultiStepper />
                </Container>
                {/* <FlightSearchMultiStepper /> */}
                
                
            {/* </div> */}
            </div>
        );
    }
}

export default BuyAirtimeFormSection;
