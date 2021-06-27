import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    // const accessToken = localStorage.getItem("token");
    const accessToken = "Your account was signed in!";

    if (!accessToken) {
        return <Redirect to="/login" />;
    }

    return (
        <Route
            {...rest}
            key="route"
            render={(props) => {
                return <Component {...props} />;
            }}
        />
    );
};

export default PrivateRoute;