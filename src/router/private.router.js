import {Redirect, Route} from "react-router-dom";
import PropTypes from "prop-types";
import Login from "../views/login";
import {RootPath} from "./routes";
import {getToken} from "../utils/helpers/authUtils";

const PrivateRoute = ({component: Component, path, ...rest}) => {
    const token = getToken();

    if (!token) {
        return <Redirect to={RootPath.PAGE_LOGIN}/>
    }
    return (
        <Route exact
               {...rest}
               key="route"
               path={path}
               render={(props) => <Component {...props} />}/>
    );
};

PrivateRoute.propTypes = {
    path: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ])
}

PrivateRoute.defaultProps = {
    path: RootPath.PAGE_LOGIN,
    component: Login
}

export default PrivateRoute;
