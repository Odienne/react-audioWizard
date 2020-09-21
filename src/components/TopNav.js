import React from 'react';
import {Nav, Navbar, Container, Row, Col} from 'react-bootstrap';

import NavDropdown from "react-bootstrap/NavDropdown";


import logo from "../images/logo.png"

export default class TopNav extends React.Component {

    state = {
        user: {name: "Odienne Adam"}
    }

    render() {
        return (
            <Container fluid>
                <Navbar>
                    <Col sm={2}>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    width="100"
                                    height="100"
                                    className="d-inline-block align-top"
                                    alt="AudioWizard Logo"
                                />
                            </Navbar.Brand>

                    </Col>
                    <Col sm={{span: 2, offset: 8}}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse>
                            <Nav>
                                <NavDropdown title={this.state.user.name} id="userDropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Navbar>
            </Container>
        )
    }
}