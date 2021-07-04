import {Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import LoginImg from '../../assets/images/logo-img.png';

import './login.css';
import {loginRequest} from "../../redux/user/actions/auth.actions";
import {useEffect, useState} from "react";

const Login = () => {
    const dispatch = useDispatch();
    const {register, formState: {errors}, handleSubmit} = useForm();
    const isLoggedIn = useSelector((state) => state?.auth?.token);
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const [errorMessage] = useState('');

    useEffect(() => {
        if (isLoggedIn) {
            setRedirectToReferrer(true);
        }
    }, [isLoggedIn]);

    const onSubmit = values => {
        dispatch(loginRequest(values));
    }

    return (redirectToReferrer ? (
                    <Redirect to="/" />
                ) : (
                    <div className="container min-h-screen max-w-full flex justify-center bg-gray-100 mx-auto">
                        <div className="flex mx-auto my-auto bg-white max-w-full">
                            <div className="img-group">
                                <img src={LoginImg} alt={'Login Image'}/>
                            </div>
                            <div className="login-form">
                                <h3 className="lg:text-left mb-2 text-center text-2xl">Welcome to TestMarker!</h3>
                                {errorMessage === '' ?
                                    <p className="line-break mb-3 text-red-600">Please sign-in to your account and start the
                                        adventure</p> : (<p>{errorMessage}</p>)}
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
                                            type="submit">
                                            <FontAwesomeIcon className="animate-spin text-2xl"
                                                             icon={faSpinner}/>
                                            <span className="text-lg">Sign In</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
    );
}

export default Login;
