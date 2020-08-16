import React from 'react';
// import Projects from "../ProjectsList/Projects/Projects";
import Details from "../ProjectDetails/Details/Details";
import style from './App.module.scss'

const App: React.FC = () => {
    return (
        <div className={style.app}>
            <Details/>
            {/*<Projects/>*/}
        </div>
    );
}

export default App;
