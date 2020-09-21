import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import MainApp from './components/MainApp';

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <TopNav/>
                </Row>
                <Row>
                    <Col sm={3}>
                        <LeftNav/>
                    </Col>
                    <Col>
                        <MainApp/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
