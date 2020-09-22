import React from 'react';

import {Nav, Navbar} from 'react-bootstrap';

export default class LeftNav extends React.Component {
    render() {
        return (
                    <Nav.Item className="menu-item">
                        <Nav.Link eventKey={this.props.href} href={this.props.href}> {this.props.text} </Nav.Link>
                    </Nav.Item>
        );
    }
}
