import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import Accueil from './components/Accueil';
import MainApp from './components/MainApp';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

function App() {
    return (

        <div className="App">
            <Router>

                <Container fluid>
                    <Row>
                        <TopNav/>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <LeftNav/>
                        </Col>
                        <Col>
                            <Switch>
                                <Route path="/" exact component={Accueil}/>
                                <Route path="/visite" exact component={MainApp}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>

        </div>
    );
}

export default App;
