import PropTypes from "prop-types";
import {Option} from "./index";

const QuestionCard = props => {
    const {
        question,
        options,
        answerSheet
    } = props;

    const getCardColor = () => {
        const {answerSheet} = question;
        return answerSheet[0].grade !== 0 ? 'border-green-400' : 'border-red-500';
    }

    const getCheckedAttribute = (option) => {
        const findOption = answerSheet.find(chosen => chosen.chosenAnswer === option.optionContent);
        return findOption !== undefined;
    }

    return (
        <>
            <div
                className={`${getCardColor()} border ml-8 mr-8 bg-gray-50 border-l-8 text-gray-500 shadow-lg rounded-lg py-3`}>
                <div className="flex justify-between ml-5 mr-5">
                    <div>
                        <span>{question.title}</span>
                    </div>
                    <div className="bg-gray-200 text-gray-400 text-center text-sm border shadow-lg rounded-md px-3">
                        <p>Điểm</p>
                        <p>{question.answerSheet[0].grade}đ</p>
                    </div>
                </div>
                <div className="block ml-5 mr-5 text-left space-y-3">
                    {options.map(option =>
                        <Option key={option.id}
                                id={option.id}
                                questionType={question.questionType}
                                optionContent={option.optionContent}
                                question={{id: question.id}}
                                disabled={true}
                                correct={option.correct}
                                checked={getCheckedAttribute(option)}/>
                    )}
                </div>
            </div>
        </>
    );
}

QuestionCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    question: PropTypes.object,
    options: PropTypes.array,
    answerSheet: PropTypes.array
}

QuestionCard.defaultProps = {
    id: '',
    question: {},
    options: [],
    answerSheet: []
}

export default QuestionCard;
