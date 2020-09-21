import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";


export default class MainApp extends React.Component {

    onClickNext = () => {
        /*check form*/
        console.log(this.lastname.value);
        console.log(this.firstname.value);
        this.test()
    }

    test = () => {
        return(
            <div>
                <p>Teeeeeehehe</p>
            </div>
        )
    }


    render() {
        return (
            <div>
                <h1>Peux-tu indiquer l'identité du patient ?</h1>

                <Form>
                    <Row>
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

                    <Button variant="primary" type="submit" onClick={this.onClickNext}>
                        Next
                    </Button>
                </Form>
            </div>
        )
    }
}