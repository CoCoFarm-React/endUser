import axios from "axios"
import { createSearchParams } from "react-router-dom"

const url = 'http://192.168.0.48:8080'
// const url = 'http://loaclhost:8080'

export const getList = async (queryObj) => {

  const queryString = createSearchParams(queryObj).toString();

  // const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`)
  const res = await axios.get(`${url}/api/board/list?${queryString}`)

  return res.data

}

export const getOne = async (bno) => {

  const res = await axios.get(`${url}/api/board/${bno}`)

  return res.data
}

// export const getFarmerList = async (queryObj) =>{

//   const res = await axios.get(`http://192.168.0.11:8080/api/admin/farmer`)
//   return res.data
  
// }

export const getConsumerList = async (queryObj) =>{

  const queryString = createSearchParams(queryObj).toString();
  
  const res = await axios.get(`${url}/api/admin/consumer?${queryString}`)

  return res.data
  
}

// export const getFarmerOne = async (mno) => {

//   const res = await axios.get(`http://localhost:8080/api/admin/read/${mno}`)

//   return res.data
// }

export const getFarmerOne = async (mno) => {

  const res = await axios.get(`${url}/api/admin/read/${mno}`)

  return res.data
}

export const getDiaryList = async (queryObj) => {

  const queryString = createSearchParams(queryObj).toString();

  const res = await axios.get(`${url}/api/board/diary/list?${queryString}`)

  return res.data

}


