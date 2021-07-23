import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({id, name, to, icon}) => {
    return (
        <li id={id} className="hover:bg-gray-100 px-4 rounded transition-colors duration-100 mx-1">
            <div className="relative inline-block text-left">
                <Link
                    className="flex items-center h-10 space-x-1"
                    to={to}>
                    {icon}
                    <span className="hover:text-purple-600">{name}</span>
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
