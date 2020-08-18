import React from 'react';
import {
    BrowserRouter as Router,
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
            <Switch>
                <Container>
                    <div className={style.app}>
                        <Route path='/projects/:id' exact children={<Details/>}/>
                        <Route path='/' exact component={Projects}/>
                    </div>
                </Container>
            </Switch>
        </Router>
    );
}

export default App;
