import {Link} from "react-router-dom";
import Icon from "@iconify/react";
import PropTypes from "prop-types";

const NavItem = (props) => {
    const {id, name, to, icon = undefined} = props;

    return (
        <li id={id} className="hover:bg-gray-100 px-4 rounded transition-colors duration-100 mx-1">
            <div className="relative inline-block text-left">
                <Link
                    className="flex items-center h-10"
                    to={to}>
                    <span className="font-medium hover:text-purple-600">{name}</span>
                    <Icon icon={icon}/>
                </Link>
            </div>
        </li>
    );
}

NavItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.element
}

export default NavItem;
