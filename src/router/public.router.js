import {Route} from "react-router-dom";

const PublicRoute = (props) => {
    const {component: Component, ...rest} = props;
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
