import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}></Route>
        </Switch>
    </Router>
)


export default AppRouter;


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

