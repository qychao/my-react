import React from "react";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import App from '../App';
import ShoopingList from '../ShoopingList';

const basicRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/ShoopingList" component={ShoopingList}/>
                <Route exact path="/" component={App}/>
            </Switch>
        </Router>
    )
};
export default basicRoute;