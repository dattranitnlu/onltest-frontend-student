import {Link} from "react-router-dom";

const Breadcrumbs = () => {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li>
                    <Link to="#">Home</Link>
                </li>
                <li>
                    <Link to="#">Documents</Link>
                </li>
                <li>Add Document</li>
            </ul>
        </div>

    );
}

export default Breadcrumbs;
