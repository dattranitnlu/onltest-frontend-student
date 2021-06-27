import {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './login';
import {Layout} from "../components/layout";

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Switch>
                    <Route path="/login" name="Login Page" render={props => <Login {...props} />}/>
                    <Route path="/" name="Home Page" render={props => <Layout {...props} />}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
