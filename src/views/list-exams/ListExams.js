import React, {useEffect} from 'react';
import {ExamCard} from "../../components/base/cards";
import {useDispatch, useSelector} from 'react-redux';
import {fetchRequest} from '../../redux/user/actions/exam.actions';

const ListExams = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state?.exam?.data);
    const pageInfo = useSelector(state => state?.exam?.pageInfo);

    useEffect(() => {
        dispatch(fetchRequest({page: 0, size: 25, query: 'on-going'})); 
    }, [dispatch, data, pageInfo])

    return (
        <>
            <div className="space-y-4">
                <section className="collapse bordered rounded-box bg-gray-50 shadow-lg collapse-arrow">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium">
                        SEARCH
                    </div>
                    <div className="collapse-content">
                        <div>
                            <label className="label">
                                <span className="label-text">Choose your superpower</span>
                            </label>
                            <select className="select select-bordered select-primary w-full max-w-xs" defaultValue={''}>
                                <option value={''}>Choose your superpower</option>
                                <option value={'telekinesis'}>telekinesis</option>
                                <option value={'time travel'}>time travel</option>
                                <option value={'invisibility'}>invisibility</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="space-y-3">
                        {
                            data.map((value, key) => {
                                return (<ExamCard key={key}
                                                  id={value.id}
                                                  title={value.title}
                                                  endDate={value.endDate}
                                                  duration={value.duration}/>);
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    );
}

export default ListExams;
