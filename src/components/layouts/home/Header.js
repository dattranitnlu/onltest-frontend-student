import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {logoutRequest} from "../../../redux/user/actions/auth.actions";
import {replace, capitalize} from 'lodash';

import {
    BellIcon,
    KeyIcon,
    LogoutIcon,
    UserIcon
} from '@heroicons/react/outline';

import {NavItem, NavDropdown} from "../../base/nav";
import nav from "../../_nav";

const Header = () => {
    const dispatch = useDispatch();
    const [cookies] = useCookies(['user_info']);
    const [user, setUser] = useState({username: '', role: ''});

    useEffect(() => {
        const userInfo = cookies['user_info'];
        if (userInfo) {
            const {username, roles = []} = userInfo;
            const roleName = capitalize(replace(roles[0].name, 'ROLE_', ''));
            if (username && roles) {
                setUser({username, role: roleName});
            }
        }
    }, [cookies]);

    const handleLogout = () => dispatch(logoutRequest());

    return (
        <div className="fixed w-full ml-0 mr-0 max-w-full min-w-max z-10 space-y-2">
            <div className="navbar shadow-lg bg-white px-8">
                <div className="flex-none">
                    <span className="text-lg font-bold">Test Maker</span>
                </div>
                <div className="flex-1 px-4 mx-4">
                    <input type="text"
                           placeholder="Search everything..."
                           className="input input-sm input-primary input-bordered"/>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost mx-6 dropdown dropdown-end m-0">
                        <BellIcon className="inline-block w-6 h-6 stroke-current m-1" width={'26.4px'} height={'30.168px'}
                                  color={'#6E6B7B'}/>
                        <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-md w-52">
                            <li>
                                <Link to={"#"}>Item 1</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Item 2</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Item 3</Link>
                            </li>
                        </ul>
                    </button>
                </div>
                <div className="flex-none space-x-2">
                    <div>
                        <span className="whitespace-nowrap">{user.username}</span>
                        <div className="flex items-center justify-end space-x-1.5">
                            <span>{user.role}</span>
                        </div>
                    </div>
                    <Link className="avatar dropdown dropdown-end">
                        <div className="rounded-full w-10 h-10 m-1">
                            <img src={'images/dat-tran.jpg'} alt="Dat Tran"/>
                        </div>
                        <ul className="p-1 shadow menu dropdown-content bg-white rounded-md w-52">
                            <li>
                                <Link className="nav-animation" to={'/'}>
                                    <UserIcon className="h-5 w-5"/>
                                    <span>Edit Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-animation" to={'/'}>
                                    <KeyIcon className="h-5 w-5"/>
                                    <span>Change Password</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-animation" to={'/'} onClick={handleLogout}>
                                    <LogoutIcon className="h-5 w-5"/>
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </Link>
                </div>
            </div>

            <nav className="navbar bg-gray-50 md:mx-8 shadow mb-2 md:rounded-box">
                <div className="md:flex hidden mx-auto md:navbar-center p-0">
                    <ul className="flex items-stretch text-base text-gray-700 pl-0 list-none space-x-2">
                        {nav.map((value, index) => {
                            if (value._tag === 'NavItem') {
                                return (
                                    <NavItem key={index}
                                             id={index}
                                             name={value.name}
                                             to={value.to}
                                             icon={value.icon}/>
                                );
                            }
                            return (
                                <NavDropdown key={index}
                                             id={index}
                                             name={value.name}
                                             to={value.to}
                                             icon={value.icon}
                                             children={value._children}/>
                            );

                        })}

                    </ul>
                </div>
                <div className="md:flex md:hidden">
                    <button className="btn btn-square btn-ghost m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}


export default Header;
