import React from 'react';
import './LeftNav.css';

import Item from './Item'

import {Nav, Navbar} from 'react-bootstrap';

export default class LeftNav extends React.Component {
    render() {
        return (
                <Nav className="col-md-12 d-md-block" activeKey="/visite">
                    <Item href="/visite" text="1er visite"/>
                    <Item href="#adaptation" text="Adaptation"/>
                    <Item href="#Link" text="Link"/>
                    <Item href="#Hello" text="Hello"/>
                    <Item href="#Statistiques" text="Statistiques"/>
                </Nav>
        );
    }
}
