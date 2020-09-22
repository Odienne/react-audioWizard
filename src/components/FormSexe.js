import React from 'react';
import './MainApp.css';

import {Form, Row, Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {ArrowRight, ArrowLeft} from 'react-bootstrap-icons';

import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

export default function MainApp() {

    const history = useHistory();
    const {register, handleSubmit} = useForm();

    function onSubmitForm(formData) {
        console.log(formData.gender)
        if (formData.gender !== "") history.push("/visite-form-final")
    }

    return (

        <div>
            <h1>Peux-tu indiquer son sexe ?</h1>

            <Form className="form-patient" onSubmit={handleSubmit(onSubmitForm)}>
                <Row className="form-content">
                    <Col sm={1}>
                        <Button sm={1} variant="primary" onClick={() => {
                            history.goBack()
                        }} className="form-submit-btn">
                            <ArrowLeft/>
                        </Button>
                    </Col>
                    <Col>
                        <Row>
                            <Col sm={{span: 4, offset: 1}}>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Homme"
                                    name="gender"
                                    id="gender-male"
                                    value="male"
                                    ref={register}
                                />
                            </Col>
                            <Col sm={{span: 4, offset: 1}}>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Femme"
                                    name="gender"
                                    id="gender-female"
                                    value="female"
                                    ref={register}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Button variant="primary" type="submit" className="form-submit-btn">
                    <ArrowRight/>
                </Button>
            </Form>
        </div>
    )
}

