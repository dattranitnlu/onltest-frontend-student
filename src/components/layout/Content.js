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
            <div className="sm:mx-auto min-w-max mt-44 mb-10 w-full">
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