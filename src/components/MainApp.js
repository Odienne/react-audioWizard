import React, {useContext} from 'react';
import './MainApp.css';

import {Form, Row, Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {ArrowRight} from 'react-bootstrap-icons';

import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import PatientProvider, {PatientContext} from "../store/PatientProvider";

export default function MainApp() {

    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const state = useContext(PatientContext)

    function onSubmitForm(formData) {
        /*check form*/
        state.setFirstname(formData.firstname);
        state.setLastname(formData.lastname);
        if (formData.firstname !== '' && formData.lastname !== '') history.push("/visite-form-sexe");
    }

    return (

        <div>
            <h1>Peux-tu indiquer l'identité du patient ?</h1>

            <Form className="form-patient" onSubmit={handleSubmit(onSubmitForm)}>
                <Row className="form-content">
                    <Col sm={{span: 4, offset: 1}}>
                        <Form.Group controlId="lastname">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Nom" name="lastname" ref={register} required/>
                        </Form.Group>
                    </Col>
                    <Col sm={{span: 4, offset: 2}}>
                        <Form.Group controlId="firstname">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" placeholder="Prénom" name="firstname" ref={register} required/>
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="submit" className="form-submit-btn">
                    <ArrowRight/>
                </Button>
                {/*<Arrow icon={ArrowRight} href="/visite-form-sexe" condition={this.onClickNext}/>*/}
                {/*<Arrow icon={ArrowRight} href="/visite-form-sexe" condition={this.onClickNext}/>*/}
            </Form>
        </div>
    )
}

