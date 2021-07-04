import {Provider} from "react-redux";
import configStore from "../redux/configStore";
import {BrowserRouter as Router} from "react-router-dom";

const store = configStore();

const AppProvider = ({children}) => {
    return (
        <Provider store={store}>
            <Router>{children}</Router>
        </Provider>
    );
}

export default AppProvider;
