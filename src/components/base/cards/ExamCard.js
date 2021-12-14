import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import NavItem from "../nav/NavItem";
import dateFormat from "dateformat";
import {RootPath} from "../../../router/routes";

const ExamCard = ({id, title, endDate, duration, avatar = 'https://picsum.photos/id/1005/400/250'}) => {
    const history = useHistory();

    const handleClickStart = (id) => {
        history.push(`${RootPath.EXAM_DETAILS}?testId=${id}`);
    }

    return (<>
        <div id={id} className="card lg:card-side bordered bg-gray-50 shadow-lg">
            <figure>
                <img className="h-full" src={avatar} alt="Exam photo sample"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Due to: {dateFormat(endDate, 'dd/mm/yyyy HH:MM TT')}</p>
                <p>Duration: {duration} mins</p>
                <div className="card-actions">
                    <button className="btn btn-primary mx-0" onClick={() => handleClickStart(id)}>Get Started</button>
                </div>
            </div>
        </div>
    </>);
}

NavItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    endDate: PropTypes.instanceOf(Date),
    duration: PropTypes.number,
    avatar: PropTypes.element
}

export default ExamCard;
