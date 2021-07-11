import {QuoteCard} from "../../components/base/cards";
import {MyListBox} from "../../components/base/Selects";

const ListExams = () => {
    return (
        <>
            <div className="flex justify-content-between flex-row flex-no-wrap grid-cols-2 gap-x-3">
                <section className="bg-gray-50 md:w-1/3 border-none shadow-lg rounded-lg py-3 space-y-4">
                    <div className="text-center text-2xl mx-8">
                        <span>Search</span>
                    </div>
                    <hr className="bg-gray-600 mx-8"/>
                    <div className="mx-8 text-sm">
                        <MyListBox label={'Subject'}/>
                    </div>

                    <hr className="bg-gray-600 mx-8"/>

                </section>
                <section className="sm:w-full border-none space-y-2 grid-cols-2 gap-x-3">
                    <QuoteCard />
                    <QuoteCard />
                    <QuoteCard />
                    <QuoteCard />
                    <QuoteCard />
                </section>

            </div>
        </>
    );
}

export default ListExams;
