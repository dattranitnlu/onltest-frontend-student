import React, {Suspense} from "react";
import {withRouter, Switch, BrowserRouter} from "react-router-dom";

import PrivateRoute from "../router/private.router";

import Login from "./login";
import PublicRoute from "../router/public.router";
import {RootPath} from "../router/routes";
import {HashSpinner} from "../components/base/spinners";
import {HomeLayout} from "../components/layouts";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<HashSpinner/>}>
                <Switch>
                    <PublicRoute path={RootPath.PAGE_LOGIN} component={Login}/>
                    <PrivateRoute path={`/`} component={HomeLayout}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default withRouter(AppRoute);
