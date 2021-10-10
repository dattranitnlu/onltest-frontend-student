import {ExamCard} from "../../components/base/cards";
import {MyListBox} from "../../components/base/selects";

const ListExams = () => {
    return (
        <>
            <div className="space-y-4">
                <section className="collapse bordered rounded-box bg-gray-50 shadow-lg collapse-arrow">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium">
                        SEARCH
                    </div>
                    <div className="collapse-content">
                        {/*<MyListBox label={'Subject'}/>*/}
                        {/*    <select className="select select-bordered select-sm select-primary w-full max-w-xs">*/}
                        {/*        <option disabled="" selected="">Choose your superpower</option>*/}
                        {/*        <option>telekinesis</option>*/}
                        {/*        <option>time travel</option>*/}
                        {/*        <option>invisibility</option>*/}
                        {/*    </select>*/}
                        <div>
                            <label className="label">
                                <span className="label-text">Choose your superpower</span>
                            </label>
                            <select className="select select-bordered select-primary w-full max-w-xs">
                                <option disabled="" selected="">Choose your superpower</option>
                                <option>telekinesis</option>
                                <option>time travel</option>
                                <option>invisibility</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="space-y-3">
                        <ExamCard/>
                        <ExamCard/>
                        <ExamCard/>
                        <ExamCard/>
                        <ExamCard/>
                        <ExamCard/>
                    </div>
                </section>

            </div>
        </>
    );
}

export default ListExams;
