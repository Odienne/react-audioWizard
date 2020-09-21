import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

export default class LeftNav extends React.Component {
    render() {
        return (
            <Nav className="col-md-12  d-md-block bg-light sidebar"
                 activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">1er visite</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >Adaptation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>

                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >Hello</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >Statistiques</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}
