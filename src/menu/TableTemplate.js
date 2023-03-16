const TableTemplate = (props) => {
    const tableHeaders = props.tableHeaders;
    //const tableData = props.tableData;
    let i =0;
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    {tableHeaders.map(data => {
                        i = i+1
                       return <th key={i}>{data}</th>
                    })}
                    </tr>
                </thead>
                <tbody>
                    {/* {tableData.map(data => {
                        return <td>{data}</td>
                    })} */}
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default TableTemplate;