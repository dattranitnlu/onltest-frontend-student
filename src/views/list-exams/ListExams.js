import React, {useState} from 'react';
import {ExamCard} from "../../components/base/cards";
import {useEffect} from "react";
import {listExamsOfStudent} from "../../services/student/ExamService";

const ListExams = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        listExamsOfStudent({page: 0, size: 25}).then(res => {
            setExams(res.data.data);
        });
    }, [])

    const listData = (page = 1, size = 25, query = '') => {
        page = (page === 0) ? 1 : page;
        listExamsOfStudent({page: 0, size: 25}).then(res => {
            setExams(res.data.data);
        });
    }

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
                            exams.map((value, key) => {
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
