import React, { useState } from 'react';

const App = () => {
    let time = new Date().toLocaleDateString();

    const [ctime, setCtime] = useState();

    const UpdateTime = () => {
        time = new Date().toLocaleDateString();
        setCtime(time);
    };

    setInterval(UpdateTime,1000)
    return (
        <>
           <h1> {ctime} </h1>
        </>
    );
};

export default App;