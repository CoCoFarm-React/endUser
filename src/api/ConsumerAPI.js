import axios from "axios"
import { createSearchParams } from "react-router-dom"
const url = 'http://192.168.0.48:8080'
// const url = 'http://loaclhost:8080'

//list
export const getCunsumerList = async (queryObj) => {

    const queryString = createSearchParams(queryObj).toString();
  
    const res = await axios.get(`${url}/api/board/list?${queryString}`)
  
    return res.data
}


export const getOne = async (bno) => {


  console.log(":asdasdasdadasasd")

  const res = await axios.get(`${url}/api/board/${bno}`)

  return res.data

}

export const deleteBoard = async (bno) => {

    const res = await axios.delete(`http://localhost:8080/api/board/${bno}`)
  
    return res.data
}
  

export const putBoard = async (formData) => {
  
    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }
 }

  

export const getFarmerList = async (queryObj) =>{

    const queryString = createSearchParams(queryObj).toString();
    
    const res = await axios.get(`${url}/api/admin/farmer?${queryString}`)
  
    return res.data
    
}
export const getFarmerOne = async (mno) => {

  const res = await axios.get(`${url}/api/admin/${mno}`)

  return res.data

}


