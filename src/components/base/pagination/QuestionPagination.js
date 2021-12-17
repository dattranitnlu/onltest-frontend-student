const QuestionPagination = ({
    currentPage,
    itemsPerPage,
    totalElements,
    totalPages,
    onChangePage,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalElements; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="mx-8 md:space-x-2 text-white font-bold">
                {pageNumbers.map((value, key) =>
                    <button key={key}
                            className="w-10 h-10 rounded-xl border-2 border-green-400 text-green-400"
                            onClick={e => onChangePage(value - 1)}>
                        {value}
                    </button>
                )}

            </div>
        </>
    );
}

export default QuestionPagination;