import PaginationTemplate from "../PaginationTemplate";

const TableTemplate = (props) => {
    const tableHeaders = props.tableHeaders;
    const tableData = props.tableData;
    let keyTh = 0;
    let keyTd = 0;
    let keyTr = 0;

    const handleButtonClick = (e) =>{
        e.preventDefault();
        console.log(e)
        const elementTarget = e.target.title;
        if(elementTarget === "download"){
            alert("tombol download ditekan")
        } else if(elementTarget === "action") {
            alert("tombol action ditekan")
        }
        
    }
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
                                    // console.log(value[1])
                                    let action = value[1].toString();
                                    if(action.includes("<button") || action.includes("<i")){
                                        return <td onClick={handleButtonClick} key={"td"+keyTd+value[1]} dangerouslySetInnerHTML={{__html: value[1]}}></td>
                                    }
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