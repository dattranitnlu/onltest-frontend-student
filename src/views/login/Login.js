import {useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "../../redux/user/actions/auth.actions";

import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import LoginImg from '../../assets/images/logo-img.png';

import './login.css';
import {RootPath} from "../../router/routes";
import {DefaultLayout} from "../../components/layouts";

const Login = () => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const [errorMessage] = useState('');
    const {register, formState: {errors}, handleSubmit} = useForm()

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state?.auth?.token);
    const loading = useSelector((state) => state?.auth?.loading);

    useEffect(() => {
        if (isLoggedIn) {
            setRedirectToReferrer(true);
        } else {
            setRedirectToReferrer(false);
        }
    }, [isLoggedIn]);

    const onSubmit = values => {
        dispatch(loginRequest(values));
    }

    return (redirectToReferrer ? (
            <Redirect to={RootPath.LIST_EXAMS}/>
        ) : (
            <DefaultLayout>
                <div className="img-group">
                    <img src={LoginImg} alt={'Login Image'}/>
                </div>
                <div className="login-form">
                    <h3 className="lg:text-left mb-2 text-center text-2xl">Welcome to TestMarker!</h3>
                        <p className="line-break mb-3 text-red-600">
                            {!errorMessage ? ('Please sign-in to your account and start the adventure') : (errorMessage)}
                        </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                className="form-control focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                id="username"
                                placeholder="Enter your username..."
                                {...register("username")}
                            />
                            {errors.username?.type === 'required' && <span>Username is required</span>}
                        </div>
                        <div className="form-group">
                            <div className="flex w-full">
                                <label htmlFor="password">Password</label>
                                <Link className="text-purple-600 ml-auto"
                                      to="/login">Forgot password?</Link>
                            </div>
                            <input
                                className="form-control focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="password"
                                id="password"
                                placeholder="Enter your password..."
                                {...register("password")}/>
                            {errors.password?.type === 'required' && <span>Password is required</span>}
                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="rememberMe"
                                   name="rememberMe"/>
                            <label className="text-opacity-75">Remember Me</label>
                        </div>
                        <div className="form-group">
                            <button
                                className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 btn"
                                type="button">
                                {loading && (
                                    <FontAwesomeIcon className="animate-spin text-2xl"
                                                     icon={faSpinner}/>
                                )}
                                <span className="text-lg">Sign In</span>
                            </button>
                        </div>
                    </form>
                </div>
            </DefaultLayout>
        )
    );
}

export default Login;
