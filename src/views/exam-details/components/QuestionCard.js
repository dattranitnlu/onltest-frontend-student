
const QuestionCard = props => {
    const {
        question,
    } = props;

    return (
        <>
            <div className="flex justify-between ml-5 mr-5">
                <div>
                    <span>{question.question}</span>
                </div>
                <div className="bg-gray-200 text-gray-400 text-center text-sm border shadow-lg rounded-md px-3">
                    <p>Điểm</p>
                </div>
            </div>
            <div className="block ml-5 mr-5 text-left space-y-3">
                {/* {optionList.map(option =>
                    <Option key={option.id}
                        id={option.id}
                        questionType={question.questionType}
                        optionContent={option.optionContent}
                        question={{ id: question.id }}
                        disabled={true}
                        correct={option.correct}
                        checked={true} />
                )} */}
            </div>
        </>
    );
}

export default QuestionCard;
