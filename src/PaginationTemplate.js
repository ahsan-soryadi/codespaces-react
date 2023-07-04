const PaginationTemplate = ({currentPage, setCurrentPage, totalPages, numbers})=> {
    const prevPage = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    }

    const changePage = (item) => {
        setCurrentPage(item)
    }

    const nextPage = () => {
        if(currentPage !== totalPages){
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <div className="table-pagination">
                <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-sm">
                        <li className="page-item">
                            <button className="page-link" onClick={prevPage}>Prev</button>
                        </li>
                        {
                            numbers.map((item, idx) => (
                                
                                <li className={`page-item ${currentPage === item ? `active` : ``}`} key={idx}>
                                    <button className="page-link" onClick={() => changePage(item)}>{item}</button>
                                </li>
                            ))
                        }
                        <li className="page-item">
                            <button href="#" className="page-link" onClick={nextPage}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}

export default PaginationTemplate;