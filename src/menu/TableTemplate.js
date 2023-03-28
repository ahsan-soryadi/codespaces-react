import PaginationTemplate from "../PaginationTemplate";

const TableTemplate = (props) => {
    const tableHeaders = props.tableHeaders;
    const tableData = props.tableData;
    let keyTh = 0;
    let keyTd = 0;
    let keyTr = 0;
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    {tableHeaders.map(data => {
                        keyTh += 1
                       return <th key={"th"+keyTh+data}>{data}</th>
                    })}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(data => {
                        const items = Object.entries(data);
                        keyTr += 1;
                        return (
                            <tr key={"tr"+keyTr}>
                                {items.map(value => {
                                    keyTd += 1;
                                    return <td key={"td"+keyTd+value[1]}>{value[1]}</td>
                                }
                                )}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <PaginationTemplate/>
        </div>
    )
}
export default TableTemplate;