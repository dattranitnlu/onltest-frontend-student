import React, {Suspense, useEffect, useState} from "react";
import {withRouter, Switch, BrowserRouter} from "react-router-dom";

import PrivateRoute from "../router/private.router";
import {Layout} from "../components/layout";
import Login from "./login";
import PublicRoute from "../router/public.router";
import {RootPath} from "../router/routes";
import {useDispatch, useSelector} from "react-redux";
import {checkAuthorization} from "../redux/user/actions/auth.actions";

const AppRoute = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state?.auth.token);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        dispatch(checkAuthorization());
        if (token) {
            setLoggedIn(true);
        }
    }, [dispatch, isLoggedIn, token])

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <PublicRoute path={RootPath.PAGE_LOGIN} component={Login}/>
                    <PrivateRoute path={`/`} component={Layout}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default withRouter(AppRoute);
