import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Projects from "../ProjectsList/Projects/Projects";
import Details from "../ProjectDetails/Details/Details";
import style from './App.module.scss'

const App: React.FC = () => {
    return (
        <Router>
            <Container>
                <div className={style.app}>
                    <Switch>
                        <Route path='/projects/:id' exact children={<Details/>}/>
                        <Route path='/' exact component={Projects}/>
                    </Switch>
                </div>
            </Container>
        </Router>
    );
}

export default App;
