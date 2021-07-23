import {Route, Switch} from 'react-router-dom';

import routes from "../../../router/routes";

const Content = () => {
    return (
        <>
            <main className="mt-44 mb-10 w-full max-w-full min-w-max">
                <div className="flex">
                    <div className="container mx-auto">
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
                </div>
            </main>
        </>
    );
}

export default Content;
