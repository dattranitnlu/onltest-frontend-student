
const QuestionPagination = ({
    currentPage,
    itemsPerPage,
    totalElements,
    totalPages
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalElements; i++) {
        pageNumbers.push(i);
      }

    return (
        <>
            <div className="mx-8 md:space-x-2 text-white font-bold">
                    {/* <button className="w-10 h-10 rounded-xl border-2 border-red-500 text-red-500">1</button>
                    <button className="w-10 h-10 rounded-xl border-2 border-green-400 text-green-400">2</button>
                    <button className="w-10 h-10 rounded-xl border-2 border-red-500 text-red-500">3</button>
                    <button className="w-10 h-10 rounded-xl border-2 border-green-400 text-green-400">4</button> */}
                    {pageNumbers.map((value, key) => (<button key={key} className="w-10 h-10 rounded-xl border-2 border-green-400 text-green-400">{value}</button>))}
                    
            </div>
        </>
    );
}

export default QuestionPagination;