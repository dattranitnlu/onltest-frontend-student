import PropTypes from "prop-types";

const Option = props => {
    const {
        id,
        questionType,
        optionContent,
        correct,
        checked,
        disabled,
        question
    } = props;

    const getTypeInput = (type) => {
        if (type === 'Single Choice')
            return 'radio';
        if (type === 'Multi Choice')
            return 'checkbox';
    }

    const isShowCorrectAnswer = (correct) => {
        return (correct &&
            <img src={'images/green-tick.svg'}
                 style={
                     {
                         color: '#28C76F',
                         width: '20px',
                         height: '20px'
                     }
                 }
                 alt={'Correct'}/>
        );
    }

    return (
        <>
            <div className="flex items-center space-x-3">
                <input className="form-check-input"
                       type={getTypeInput(questionType)}
                       id={`option-${id}`}
                       name={`question-${question.id}`}
                       disabled={disabled}
                       checked={checked}/>
                <span>{optionContent}</span>
                {isShowCorrectAnswer(correct)}
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