import PropTypes from "prop-types";

const Option = props => {
    const {
        id,
        questionType,
        optionContent,
        question
    } = props;

    const getTypeInput = (type) => {
        if (type === 'SINGLE_CHOICE')
            return 'radio';
        if (type === 'MULTI_CHOICE')
            return 'checkbox';
    }

    return (
        <>
            <div className="flex items-center space-x-3">
                <input className="form-check-input"
                       type={getTypeInput(questionType)}
                       id={`option-${id}`}
                       name={`question-${question.id}`}/>
                <span>{optionContent}</span>
            </div>
        </>
    );
}

Option.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    questionType: PropTypes.string,
    disabled: PropTypes.bool,
    correct: PropTypes.bool,
    optionContent: PropTypes.string,
    question: PropTypes.object,
    checked: PropTypes.bool
}

Option.defaultProps = {
    id: '',
    questionType: '',
    correct: false,
    optionContent: '',
    question: {},
    checked: false
}

export default Option;
