import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import Accueil from './components/Accueil';
import MainApp from './components/MainApp';
import FormSexe from './components/FormSexe';
import FormFinal from './components/FormFinal';

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
                                <Route path="/visite-form-name" exact component={MainApp}/>
                                <Route path="/visite-form-sexe" exact component={FormSexe}/>
                                <Route path="/visite-form-final" exact component={FormFinal}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>

        </div>
    );
}

export default App;
