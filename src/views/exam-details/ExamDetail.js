import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUndo} from '@fortawesome/free-solid-svg-icons';

import {QuestionCard} from "./components";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import ExamDetailData from "../../components/data/ExamDetailData";
import { QuestionPagination } from '../../components/base/pagination';
import { fetchContentRequest } from '../../redux/user/actions/content.actions';
import { useDispatch, useSelector } from 'react-redux';

const ExamDetail = () => {
    const {time, subject} = ExamDetailData;
    const search = useLocation().search;
    const testId = new URLSearchParams(search).get('testId');

    const dispatch = useDispatch();
    const data = useSelector(state => state?.content?.data);
    const pageInfo = useSelector(state => state?.content?.pageInfo);

    useEffect(() => {
        if(testId) {
            dispatch(fetchContentRequest({testId, page: 0, size: 1}));
        }
    }, [dispatch, testId])
    console.log(data);

    return (
        <div className="flex justify-content-between flex-row flex-no-wrap grid-cols-2 gap-x-3">
            <section className="sm:w-full bg-gray-50 border-none shadow-lg rounded-lg py-6 space-y-4">
                {data.map(question => <QuestionCard key={question.id}
                                                         question={question}
                                                         optionList={question.optionList}/>
                )}

            </section>
            <section className="bg-gray-50 md:w-1/3 border-none shadow-lg rounded-lg py-3 space-y-4">
                <div className="text-center text-2xl mx-8 divide-y-2">
                    <span>{subject.courseName}</span>
                </div>
                <hr className="bg-gray-600 mx-8"/>
                <div className="flex justify-between mx-8">
                    <div>
                        <h4>Thời gian: <span
                            className="text-green-400">01:12</span> / {`${Math.floor(time / 60)}:${time % 60}`}</h4>
                        <h4>Số câu đúng: 12/20</h4>
                    </div>
                </div>
                <div className="mx-8 space-x-2">
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
                <hr className="bg-gray-600 mx-8"/>
                <QuestionPagination currentPage={pageInfo.currentPage}
                                    itemsPerPage={pageInfo.itemsPerPage}
                                    totalElements={pageInfo.totalElements}
                                    totalPages={pageInfo.totalPages}/>
            </section>
        </div>
    );
}

export default ExamDetail;
