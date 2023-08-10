import axios from "axios"
import { createSearchParams } from "react-router-dom"


export const getList = async (queryObj) => {

<<<<<<< HEAD
  const queryString = createSearchParams(queryObj).toString()

  const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`)

  return res.data

=======
    const queryString = createSearchParams(queryObj).toString();
  
    const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`)
  
    return res.data
>>>>>>> a5cbb7d8a3b5edec4f8d462238e29a850be7bbae
}

export const getOne = async (bno) => {

<<<<<<< HEAD
  const res = await axios.get(`http://localhost:8080/api/board/${bno}`)

  return res.data
}
=======
    const res = await axios.get(`http://localhost:8080/api/board/${bno}`)
  
    return res.data
  }
>>>>>>> a5cbb7d8a3b5edec4f8d462238e29a850be7bbae
