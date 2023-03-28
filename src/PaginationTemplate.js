const PaginationTemplate = (props)=> {
    return (
        <div className="table-pagination">
                <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-sm">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item"><a className="page-link" href="#">6</a></li>
                        <li className="page-item"><a className="page-link" href="#">7</a></li>
                        <li className="page-item"><a className="page-link" href="#">8</a></li>
                        <li className="page-item"><a className="page-link" href="#">9</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
    )
}

export default PaginationTemplate;