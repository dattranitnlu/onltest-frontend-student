import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {connect} from 'react-redux';

import Icon from '@iconify/react';
import bxBell from '@iconify/icons-bx/bx-bell';
import bxSearch from '@iconify/icons-bx/bx-search';

import {NavItem, NavDropdown} from "../base/nav";
import nav from "../_nav";
import {getCredential} from "../../redux/actions/auth.actions";

const Header = ({dispatch, auth}) => {
    const [isShowAvatarDropdown, setShowAvatarDropdown] = useState(false);
    const handleClickAvatar = () => setShowAvatarDropdown(!isShowAvatarDropdown);

    useEffect(() => {
       dispatch(getCredential());
    }, [dispatch]);

    return (
        <div className="max-w-full min-w-max">
            <header className="flex bg-white border-b shadow">
                <div className="container mx-auto">
                    <div className="flex items-center h-full ml-10 mr-10">
                        <Link className="whitespace-nowrap" to="/">TEST MAKER</Link>
                        <form className="flex items-center ml-14 mr-5">
                            <div className="flex items-center border-b-2 border-purple-600">
                                    <Icon className="mx-auto border-none flex items-center"
                                          icon={bxSearch}
                                          color="#6E6B7B"
                                          height="20px"
                                          width="20px"/>

                                    <input
                                        className="outline-none"
                                        type="text"
                                        id="fast-search"
                                        name="fast-search"
                                        placeholder="Search Here..." />
                            </div>
                        </form>
                        <ul className="flex items-center ml-auto space-x-5">
                            <li className="relative ml-1.5 mr-1.5">
                                <Link className="block whitespace-nowrap text-purple-800"
                                      to="/">
                                    <Icon icon={bxBell}
                                          color="#6E6B7B"
                                          width="22px"
                                          height="25.14px" />
                                    <span className="flex">
                                        <span className="animate-ping absolute top-1 right-1 inline-flex rounded-full w-2 h-2 bg-pink-500"/>
                                        <span className="absolute top-1 right-1 inline-flex rounded-full w-2 h-2 bg-pink-600"/>
                                    </span>
                                </Link>
                            </li>
                            <li className="relative">
                                <div className="flex items-center space-x-3">
                                    <Link to="/">
                                        <span className="">{auth.username}</span>
                                        <div className="flex items-center justify-end space-x-1.5">
                                            <span>Student</span>
                                        </div>
                                    </Link>
                                    <div className="relative inline-block text-left object-contain h-8 w-8">
                                        <button className="block text-left w-full"
                                                type="button"
                                                onClick={handleClickAvatar}>
                                            <img className="rounded-full h-8 w-8"
                                                 src={'images/dat-tran.jpg'}
                                                 alt="Dat Tran" />
                                            <div className="absolute bottom-0 right-0">
                                                <div className="rounded-full w-2 h-2 bg-green-500" />
                                            </div>
                                        </button>
                                        {isShowAvatarDropdown && (
                                            <div
                                                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="menu-button"
                                                tabIndex="-1">
                                                <div className="py-1" role="none">
                                                    <Link className="text-gray-700 block px-4 py-2 text-sm"
                                                          role="menuitem"
                                                          tabIndex="-1"
                                                          id="menu-item-0"
                                                          to="/">Edit Profile</Link>
                                                    <Link className="text-gray-700 block px-4 py-2 text-sm"
                                                          role="menuitem"
                                                          tabIndex="-1"
                                                          id="menu-item-1"
                                                          to="/">Change
                                                        Password</Link>
                                                </div>
                                                <div className="py-1" role="none">
                                                    <Link className="text-gray-700 block px-4 py-2 text-sm"
                                                          role="menuitem"
                                                          tabIndex="-1"
                                                          id="menu-item-3"
                                                          to="/login">Logout</Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <nav className="block bg-white border-b shadow">
                <div className="flex justify-center container mx-auto max-w-6xl min-w-max h-full">
                    <ul className="flex items-center text-sm text-gray-400 pl-0 mb-0 list-none space-x-4">
                        {nav.map((value, index) => {
                            if (value._tag === 'NavItem') {
                                return (
                                    <NavItem key={index}
                                             name={value.name}
                                             to={value.to} />
                                );
                            }
                            return (
                                <NavDropdown key={index}
                                             name={value.name}
                                             to={value.to}
                                             icon={value.icon}
                                             childen={value._children} />
                            );

                        })}

                    </ul>
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Header);