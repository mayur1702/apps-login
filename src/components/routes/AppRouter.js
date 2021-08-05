import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login/Login';
import Register from '../registration/Register';

const paths = {
    registration: "/register",
    login: "/login"
};

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={paths.registration} component={Register} />
                <Route path={paths.login} component={Login} />
                <Route path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;