import React from 'react';
import Progress from "./Components/Progress/Progress";

const App:React.FC = () => {
    return (
        <div className="App">
            <Progress progress={30} />
        </div>
    );
}

export default App;
