import { Option } from ".";
const QuestionCard = props => {
    const {
        testOrder,
        question,
        optionList
    } = props;

    return (
        <>
            <div
                className={`border ml-8 mr-8 bg-gray-50 border-l-8 text-gray-500 shadow-lg rounded-lg py-3`}>

                <div className="flex justify-between ml-5 mr-5">
                    <div>
                        <span className="font-bold">Cau {testOrder}: {question.question.question}</span>
                    </div>
                    {/* <div className="bg-gray-200 text-gray-400 text-center text-sm border shadow-lg rounded-md px-3">
                        <p>Điểm</p>
                    </div> */}
                </div>
                <div className="block ml-5 mr-5 text-left space-y-3">
                    {optionList.map(option =>
                        <Option key={option.id}
                            id={option.id}
                            questionType={question.question.questionType.typeName}
                            optionContent={option.optionContent}
                            question={{ id: question.id }}
                            disabled={false} />
                    )}
                </div>
            </div>
        </>
    );
}

export default QuestionCard;
