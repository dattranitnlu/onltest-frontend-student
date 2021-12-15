import {Link} from "react-router-dom";

import {useState} from "react";
import NavItem from "./NavItem";
import PropTypes from "prop-types";

const NavDropdown = ({id, name, to, icon = undefined, children}) => {
    const [isShow, setShow] = useState(false);

    const handleClickShowDropdown = () => {
        setShow(!isShow);
    }

    return (
        <>
            <div id={id}>
                <div className="relative inline-block text-left">
                    <Link
                        className="flex items-center hover:bg-gray-100 h-10 px-4 rounded duration-100 mx-1 hover:text-purple-600"
                        id="menu-button"
                        onClick={handleClickShowDropdown}
                        to={'#'}>
                        <span className="hover:text-purple-600">{name}</span>
                        {icon}
                    </Link>

                    {isShow && children && (
                        <div
                            className="origin-top-right absolute left-1 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1">
                            <div className="py-1">
                                {children.map((value, index) => {
                                    if (value._tag === 'NavItem') {
                                        return (
                                            <NavItem key={index}
                                                     id={index}
                                                     name={value.name}
                                                     to={value.to}/>
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
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

NavDropdown.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
    children: PropTypes.array
}

export default NavDropdown;
