import {Link} from "react-router-dom";
import LoginImg from '../../assets/images/logo-img.png';

import './login.css';

const Login = () => {
    return (
        <div className="container min-h-screen max-w-full flex justify-center bg-gray-100 mx-auto">
            <div className="flex mx-auto my-auto bg-white max-w-full">
                <div className="img-group">
                    <img src={LoginImg} alt={'Login Image'}/>
                </div>
                <div className="login-form">
                    <h3 className="lg:text-left mb-2 text-center text-2xl">Welcome to TestMarker!</h3>
                    <p className="line-break mb-3">Please sign-in to your account and start the adventure</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                className="form-control focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="teo@example.com"/>
                        </div>
                        <div className="form-group">
                            <div className="flex w-full">
                                <label htmlFor="password">Password</label>
                                <Link className="text-purple-600 ml-auto" to="/login">Forgot password?</Link>
                            </div>
                            <input
                                className="form-control focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"/>
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
                                className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 btn"
                                type="submit">Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;