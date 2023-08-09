import axios from "axios"
import { createSearchParams } from "react-router-dom"

export const getList = async (queryObj) => {

  const queryString = createSearchParams(queryObj).toString();

  const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`)

  return res.data

}

// export const getOne = async (bno) => {

//   const res = await axios.get(`http://localhost:8080/api/board/${bno}`)

//   return res.data
// }

// // export const getFarmerList = async (queryObj) =>{

// //   const res = await axios.get(`http://192.168.0.11:8080/api/admin/farmer`)
// //   return res.data
  
// // }


// // 서버연동
// // export const getConsumerList = async (queryObj) =>{

  
// //   const res = await axios.get(`http://192.168.0.11:8080/api/admin/consumer`)

// //   return res.data
  
// // }

// // 로컬 테스트용
// export const getConsumerList = async (queryObj) =>{

  
//   const res = await axios.get(`http://localhost:8080/api/admin/consumer`)

//   return res.data
  
// }

