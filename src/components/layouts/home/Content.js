import {Route, Switch} from 'react-router-dom';

import routes from "../../../router/routes";
import Breadcrumbs from "../../base/breadcrumbs";

const Content = () => {
    return (
        <>
            <main className="mt-36 mb-10 w-full">
                <div className="md:container md:mx-auto sm:mx-8">
                    <Breadcrumbs />
                    <Switch>
                        {routes.map((routeItem, key) => {
                            return (
                                <Route key={key}
                                       path={routeItem.path}
                                       exact={routeItem.exact}
                                       name={routeItem.name}
                                       render={(props) => <routeItem.component {...props}/>}/>
                            );
                        })}
                    </Switch>
                </div>
            </main>
        </>
    );
}

export default Content;
