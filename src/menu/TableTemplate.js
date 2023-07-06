import PaginationTemplate from "../PaginationTemplate";
import { useState } from "react";

const TableTemplate = (props) => {
    const tableHeaders = props.tableHeaders
    const tableData = props.tableData
    let isPagingEnabled = props.isPagingEnabled
    const setCekButton = props.setCekButton
    const setValidateButton = props.setValidateButton
    // console.log("tabel data = ", tableData)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5;
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    let totalPages
    let numbers
    let items
    if(tableData.constructor.name === 'Array'){
        items = tableData.slice(firstItemIndex, lastItemIndex)
        totalPages = Math.ceil(tableData.length / itemsPerPage)
        numbers = [...Array(totalPages + 1).keys()].slice(1)
        if(itemsPerPage >= tableData.length){
            isPagingEnabled = false
        }
    } else {
        items = [{...tableData}]
    }

    let keyTh = 0;
    let keyTd = 0;
    let keyTr = 0;

    

    const handleButtonClick = (e) =>{
        e.preventDefault();
        // console.log(e)
        const elementTarget = e.target.title;
        // if(elementTarget === "download"){
        //     alert("tombol download ditekan")
        if(elementTarget.includes("action")) {
            // alert("tombol action ditekan")
            const id = e.target.title.split('-')
            setCekButton(id[1])
        } else if(elementTarget.includes("validate")){
            const id = e.target.title.split('-')
            setValidateButton(id[1])
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
                    {items.map(data => {
                        const items = Object.entries(data);
                        keyTr += 1;
                        return (
                            <tr key={"tr" + keyTr}>
                                {items.map(value => {
                                    keyTd += 1;
                                    // console.log(value[1])
                                    let action = value[1].toString();
                                    if (action.includes("<button") || action.includes("<i")) {
                                        return <td onClick={handleButtonClick} key={"td" + keyTd + value[1]} dangerouslySetInnerHTML={{ __html: value[1] }}></td>
                                    }
                                    return <td key={"td" + keyTd + value[1]}>{value[1]}</td>
                                }
                                )}
                            </tr>
                        )
                    }) 
                    }
                </tbody>
            </table>
            {
                isPagingEnabled && <PaginationTemplate currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} numbers={numbers}/>
            }
            
        </div>
    )
}
export default TableTemplate;