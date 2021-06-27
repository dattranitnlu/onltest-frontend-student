import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUndo} from '@fortawesome/free-solid-svg-icons';

import ExamDetailData from "../../components/data/ExamDetailData";
import {QuestionCard} from "./components";

const ExamDetail = () => {
    const {time, subject, questions} = ExamDetailData;

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 border-none shadow-lg rounded-lg py-6 space-y-4 my-7">
                {questions.map(question => <QuestionCard key={question.id}
                                                         question={question}
                                                         options={question.options}
                                                         answerSheet={question.answerSheet}/>
                )}
            </div>
            <div className="bg-gray-50 border-none shadow-lg rounded-lg py-3 space-y-4 my-7">
                    <div className="text-center text-2xl ml-8 mr-8 divide-y-2">
                        <div>{subject.courseName}</div>
                    </div>
                    <hr className="bg-gray-600 ml-8 mr-8"/>
                    <div className="flex justify-between ml-8 mr-8">
                        <div>
                            <h4>Thời gian: <span
                                className="text-green-400">01:12</span> / {`${Math.floor(time / 60)}:${time % 60}`}</h4>
                            <h4>Số câu đúng: 12/20</h4>
                        </div>
                    </div>
                    <div className="ml-8 mr-8 space-x-2">
                        <button
                            className="space-x-1.5 px-2.5 py-0.5 hover:bg-red-500 bg-red-200 bg-opacity-50 rounded-lg border-red-400 text-red-500 hover:text-white text-sm">
                            <FontAwesomeIcon icon={faUndo}/>
                            <span>Quay lại</span>
                        </button>
                        <button
                            className="px-2.5 py-0.5 hover:bg-purple-600 bg-purple-200 bg-opacity-50 rounded-lg border-purple-400 text-purple-600 hover:text-gray-100 text-sm">Câu
                            sai
                        </button>
                        <button
                            className="px-2.5 py-0.5 hover:border-purple-600 bg-purple-200 bg-opacity-50 rounded-lg border-2 border-purple-400 text-purple-400 hover:text-purple-600 text-sm">Câu
                            đúng
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default ExamDetail;