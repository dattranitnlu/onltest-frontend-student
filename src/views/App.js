import {Route, Switch} from 'react-router-dom';
import Boot from '../redux/boot';
import AppProvider from "./AppProvider";
import AppRoute from "./AppRoute";

const App = () => {
    return (
        <AppProvider>
            <Switch>
                <Route path="/">
                    <AppRoute/>
                </Route>
            </Switch>
        </AppProvider>
    );
};

Boot().then(() => App()).catch((error) => console.error(error));

export default App;
