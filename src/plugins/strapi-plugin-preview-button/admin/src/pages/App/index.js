import React from 'react';
import Route from 'react-router-dom'
import MyPage from "../MyPage";

const App = () => {

    return (
        <div>
            <Route exact path="/my-route" component={MyPage} />
        </div>
    );
};

export default App;
