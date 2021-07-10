import {Link} from "react-router-dom";

const QuoteCard = () => {
    return (
        <div className="sm:w-full md:w-2/6 bg-white rounded-xl shadow-md overflow-hidden sm:max-w-full">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48"
                         src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                         alt="Man looking at item at a store"/>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-md text-indigo-500 font-semibold">Algebra A3</div>
                    <Link to={'/exam-details'} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Midterm
                        Test</Link>
                    <p>Time: 21:00</p>
                    <button className="btn-blue">DO IT</button>
                </div>
            </div>
        </div>
    );
}

export default QuoteCard;
