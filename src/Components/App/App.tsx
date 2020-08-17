import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import Projects from "../ProjectsList/Projects/Projects";
import Details from "../ProjectDetails/Details/Details";
import style from './App.module.scss'

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <div className={style.app}>
                    <Route path='/projects/:id' exact children={<Details/>}/>
                    <Route path='/' exact component={Projects}/>
                </div>
            </Switch>
        </Router>
    );
}

export default App;
