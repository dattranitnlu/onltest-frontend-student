import {Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
import AppRoute from "./AppRoute";
import Boot from '../redux/boot';

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <AppRoute/>
        </Router>
    );
};

Boot().then(() => App()).catch((error) => console.error(error));

export default App;
