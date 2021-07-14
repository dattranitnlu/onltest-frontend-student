import {Route} from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            key="route"
            render={(props) => {
                return <Component {...props} />;
            }}
        />
    );
}


export default PublicRoute;
