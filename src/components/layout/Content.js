import {Redirect, Route, Switch} from 'react-router-dom';

import routes from "../../router/routes";

const Content = () => {
    const accessToken = null;

    const checkAuthentication = () => {
        if (accessToken) {
            return <Redirect to={'/home'}/>;
        }
        return <Redirect to={'/login'}/>;
    }

    return (
        <>
            <div className="container sm:mx-auto max-w-6xl min-w-max my-10">
                <Switch>
                    {routes.map((route, id) => {
                        return route.component && checkAuthentication() && (
                            <Route key={id}
                                   path={route.path}
                                   exact={route.exact}
                                   name={route.name}
                                   render={props => <route.component {...props}/>}/>
                        )
                    })}
                </Switch>
            </div>
        </>
    );
}

export default Content;