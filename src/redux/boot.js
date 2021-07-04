import * as authActions from '../redux/user/actions/auth.actions';
import configStore from './configStore';

const store = configStore();

const boot = async () => {
    await store.dispatch(authActions.checkAuthorization());
};

export default boot;
