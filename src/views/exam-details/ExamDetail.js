import { QuestionCard } from "./components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ExamDetailData from "../../components/data/ExamDetailData";
import { QuestionPagination } from '../../components/base/pagination';
import { fetchContentRequest } from '../../redux/user/actions/content.actions';
import { useDispatch, useSelector } from 'react-redux';

const ExamDetail = () => {
    const { time, subject } = ExamDetailData;
    const search = useLocation().search;
    const testId = new URLSearchParams(search).get('testId');

    const dispatch = useDispatch();
    const data = useSelector(state => state?.content?.data);
    const pageInfo = useSelector(state => state?.content?.pageInfo);

    useEffect(() => {
        dispatch(fetchContentRequest({ testId, page: 0, size: 1 }));
    }, [dispatch, testId])

    const onChangePage = (currentPageNumber) => {
        dispatch(fetchContentRequest({ testId, page: currentPageNumber, size: 1 }))
    }

    return (
        <div className="flex justify-content-between flex-row flex-no-wrap grid-cols-2 gap-x-3">
            <section className="sm:w-full bg-gray-50 border-none shadow-lg rounded-lg py-6 space-y-4">
                {data.map(item => <QuestionCard key={item.id}
                    testOrder={item.testOrder}
                    question={item}
                    optionList={item.question?.optionList} />
                )}

            </section>
            <section className="bg-gray-50 md:w-1/3 border-none shadow-lg rounded-lg py-3 space-y-4">
                <div className="text-center text-2xl mx-8 divide-y-2">
                    <span>{subject.courseName}</span>
                </div>
                <hr className="bg-gray-600 mx-8" />
                <div className="flex justify-between mx-8">
                    <div>
                        <h4>Thời gian: <span
                            className="text-green-400">01:12</span> / {`${Math.floor(time / 60)}:${time % 60}`}</h4>
                    </div>
                </div>

                <hr className="bg-gray-600 mx-8" />
                <QuestionPagination currentPage={pageInfo.currentPage}
                    itemsPerPage={pageInfo.itemsPerPage}
                    totalElements={pageInfo.totalElements}
                    totalPages={pageInfo.totalPages}
                    onChangePage={onChangePage} />
            </section>
        </div>
    );
}

export default ExamDetail;
