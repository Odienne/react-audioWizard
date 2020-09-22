import React from 'react';
import './MainApp.css';


import {Form, Row, Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { ArrowRight } from 'react-bootstrap-icons';

export default class MainApp extends React.Component {

    onClickNext = () => {
        /*check form*/
        console.log(this.lastname.value);
        console.log(this.firstname.value);
    }


    render() {
        return (
            <div>
                <h1>Peux-tu indiquer l'identité du patient ?</h1>

                <Form className="form-patient">
                    <Row className="form-content">
                        <Col sm={{span: 4, offset: 1}}>
                            <Form.Group controlId="lastname">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" placeholder="Nom" ref={(ref) => {this.lastname = ref}} required/>
                            </Form.Group>
                        </Col>
                        <Col sm={{span: 4, offset: 2}}>
                            <Form.Group controlId="firstname">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="text" placeholder="Prénom" ref={(ref) => {this.firstname = ref}} required/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit" className="form-submit-btn" onClick={this.onClickNext}>
                        <ArrowRight/>
                    </Button>
                </Form>
            </div>
        )
    }
}