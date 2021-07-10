import {useEffect, useState, Suspense } from "react";
import {withRouter, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import PrivateRoute from "../router/private.router";
import {Layout} from "../components/layout";
import Login from "./login";
import {checkAuthorization} from "../redux/user/actions/auth.actions";

const AppRoute = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state?.auth.token);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        dispatch(checkAuthorization());
        if(token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [dispatch, isLoggedIn, token]);

    return (
        <Suspense fallback={null}>
            <Switch>
                <Route path={`/login`}
                       component={props => <Login {...props}/>} />
                <PrivateRoute path={`/`}
                              isAuthenticated={isLoggedIn}
                              component={props => <Layout {...props}/>}/>
            </Switch>
        </Suspense>
    );
};

export default withRouter(AppRoute);
