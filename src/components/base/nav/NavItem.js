import {Link} from "react-router-dom";
import Icon from "@iconify/react";
import PropTypes from "prop-types";

const NavItem = (props) => {
    const {
        id,
        name,
        to,
        icon
    } = props;

    return (
        <li>
            <div className="relative inline-block text-left">
                <div>
                    <Link id={id}
                        className="flex items-center h-10 leading-10 px-4 rounded no-underline hover:no-underline transition-colors duration-100 mx-1 hover:text-purple-600"
                        to={to}>
                        <span>{name}</span>
                        <Icon icon={icon}/>
                    </Link>
                </div>
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