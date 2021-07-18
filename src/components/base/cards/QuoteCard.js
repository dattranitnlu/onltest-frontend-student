import {Link} from "react-router-dom";

const QuoteCard = () => {
    return (
        <div className="sm:w-full bg-white rounded-lg shadow-lg overflow-hidden sm:max-w-full">
            <div className="flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48"
                         src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                         alt="Man looking at item at a store"/>
                </div>
                <div className="p-8">
                    <span className="uppercase tracking-wide text-md text-purple-800 font-semibold">Algebra A3</span>
                    <span className="block mt-1 text-sm leading-tight font-medium text-black hover:text-purple-800">
                        Midterm Test</span>
                    <p>Time: 21:00</p>
                    <Link to={'/exam-details'}
                        className="px-2.5 py-0.5 hover:border-purple-600 bg-purple-200 bg-opacity-50 rounded-lg border-2 border-purple-400 text-purple-400 hover:text-purple-600 text-sm">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default QuoteCard;
