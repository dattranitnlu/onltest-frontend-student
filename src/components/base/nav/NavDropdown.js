import {Link} from "react-router-dom";
import Icon from "@iconify/react";

import {useState} from "react";
import NavItem from "./NavItem";
import PropTypes from "prop-types";

const NavDropdown = (props) => {
    const {
        id,
        name,
        to,
        icon = undefined,
        children
    } = props

    const [isShow, setShow] = useState(false);

    const handleClickShowDropdown = () => {
        setShow(!isShow);
    }

    return (
        <>
            <li id={id}>
                <div className="relative inline-block text-left">
                    <div>
                        <Link
                            className="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline duration-100 mx-1 hover:text-purple-600"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onClick={handleClickShowDropdown}
                            to={to}>
                            {name}
                            <Icon icon={icon}/>
                        </Link>
                    </div>

                    {isShow && children && (
                        <div
                            className="origin-top-right absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1">
                            <div className="py-1" role="none">
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
            </li>
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
