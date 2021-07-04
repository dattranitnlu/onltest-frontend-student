import {Route, Switch} from 'react-router-dom';

import routes from "../../router/routes";

const Content = () => {
    return (
        <>
            <div className="sm:mx-auto min-w-max mt-44 mb-10 w-full">
                <Switch>
                    {routes.map((routeItem, key) => {
                        return (
                            <Route key={key}
                                   path={routeItem.path}
                                   exact={routeItem.exact}
                                   name={routeItem.name}
                                   render={(props) => <routeItem.component {...props}/> }/>
                        );
                    })}
                </Switch>
            </div>
        </>
    );
}

export default Content;
