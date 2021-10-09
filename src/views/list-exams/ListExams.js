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
                        <MyListBox label={'Subject'}/>
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
