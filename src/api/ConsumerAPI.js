import axios from "axios"
import { createSearchParams } from "react-router-dom"


export const getCunsumerList = async (queryObj) => {

    const queryString = createSearchParams(queryObj).toString();
  
    const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`)
  
    return res.data
}

export const getCunsumerOne = async (bno) => {

  const res = await axios.get(`http://localhost:8080/api/board/${bno}`)

  return res.data
}
