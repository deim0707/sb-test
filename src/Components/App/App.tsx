import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from "react-bootstrap/Container";

// Разделяй импорты с абсолютным путем и относительным
import Projects from "../ProjectsList/Projects/Projects";
import Details from "../ProjectDetails/Details/Details";
import s from './App.module.scss'

// Если уж зафигачил тип, то заюзай дженерик
const App: FC<{}> = () =>
  (
    <Router>
      <Switch>
        <Container>
          <div className={s.app}>
            <Route path='/projects/:id' exact children={<Details />} />
            <Route path='/' exact component={Projects} />
          </div>
        </Container>
      </Switch>
    </Router>
  );


export default App;
