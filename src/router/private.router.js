import {Redirect, Route} from "react-router-dom";
import PropTypes from "prop-types";
import Login from "../views/login";

const PrivateRoute = ({component: Component, path, isAuthenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            key="route"
            path={path}
            render={(props) => isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: '/login', state: { from: props.location } }}
                />
            )
            }/>
    );
};

PrivateRoute.propTypes = {
    path: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
}

PrivateRoute.defaultProps = {
    path: '/',
    isAuthenticated: false,
    component: <Login/>
}
export default PrivateRoute;
