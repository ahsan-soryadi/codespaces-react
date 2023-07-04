import { useEffect, useState } from "react";

export const useCheckNumber = (event) =>{
    if(!((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 8 || event.keyCode === 9)){
        event.preventDefault();
    }
}

export const InvalidInputMessage = ({message}) => {
    return (
        <i>
            <p style={{color:"red", fontSize:"12px"}}>{message}</p>
        </i>
    )
}

export function useCheckNoPO(noPO){
    const [isNoPOExist, setIsNoPOExist] = useState(null)
    useEffect(() => {
        // setNoPO(e.target.value)
       if (noPO !== '') {
           fetch('http://localhost:3001/stock/checkNoPO', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               credentials: "same-origin",
               body: JSON.stringify({ noPO: noPO })
           })
               .then(response => response.json())
               .then(data => {
                    setIsNoPOExist(data.isNoPOExist)
                   if (!isNoPOExist) {
                    //    setNoPO(e.target.value)
                   }
                //    console.log("no. po:", noPO)
               })
               .catch(error => console.log(error))
       }
    }, [noPO])
    
    return isNoPOExist
}

export const useCheckSerialNumber = (serialNumber = [], checkStatus)=>{
    const [isSerialNumberExist, setIsSerialNumberExist] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/stock/checkSerialNumber', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify({serialNumber: serialNumber})
        })
        .then(response => response.json())
        .then(data => {
            // console.log("isSerialNumberExist : ", data)
            setIsSerialNumberExist(data.isSerialNumberExist)
        })
        .catch(error => console.log(error))
        return () => setIsSerialNumberExist([])
    }, [serialNumber, checkStatus])
    return isSerialNumberExist
}

export const useGetBarangBySerialNumber = (serialNumber = '', checkStatus) => {
    const [barang, setBarang] = useState('')
    useEffect(()=>{
        fetch('http://localhost:3001/barang/getBarangBySerialNumber', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify({serialNumber: serialNumber})
        })
        .then(response => response.json())
        .then(data => {
            // console.log("isSerialNumberExist : ", data)
            setBarang(data)
        })
        .catch(error => console.log(error))
        return ()=> setBarang('')
    },[checkStatus])

    return barang
}