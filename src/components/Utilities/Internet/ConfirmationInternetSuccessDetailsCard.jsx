import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import successicon from '../../../assets/img/icons/success-icon.png'

function ConfirmationInternetSuccessDetailsCard() {

    // const [validated, setValidated] = useState(false);
    
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    // setValidated(true);
    // };
   
    return (
        <div>
            {/* <Card style={{backgroundColor: 'transparent', border: 'none'}}> */}
                <div style={{ backgroundColor: 'transparent', padding: '20px'}} align='center'>
                    <br/>
                    <img src={successicon} alt=""/>
                    <br/>
                    <br/>
                    <h4> <b>Transaction Successful</b> </h4>
                    <br/>
                    <h6> Order #95622 </h6>
                    <h6> Total 1,000 </h6>
                    <h6> Payment xxxx xxxx xxxx 1111 (VISA) </h6>
                    <p style={{fontSize: '15px'}}> This charge will appear on your statement as ECONNECT TICKET </p>
                    {/* <hr style={{color: '#043f7c', borderTop: '1px dashed'}}/> */}
                    <Button style={{width: '300px'}} variant='success' type="submit"><span style={{fontSize: 'small'}}>View Receipt</span> </Button>
                    <br/>
                    <br/>
                    <br/>
                </div>
                {/*  */}
                
            {/* </Card> */}
        </div>
        
    )
}

export default ConfirmationInternetSuccessDetailsCard
