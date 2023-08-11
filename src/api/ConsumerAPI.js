import axios from "axios"
import { createSearchParams } from "react-router-dom"
const url = 'http://192.168.0.74:8080'
// const url = 'http://loaclhost:8080'

//list
export const getCunsumerList = async (queryObj) => {

  const queryString = createSearchParams(queryObj).toString()

  const res = await axios.get(`${url}/api/board/list?${queryString}`)

  return res.data

}
//regist
export const postConsumer = async(formData) => {
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }

  const res = await axios.post(`${url}/api/board/`, formData, header)

  return res.data

}
//read
export const getCunsumerOne = async (bno) => {

  const res = await axios.get(`${url}/api/board/${bno}`)

  return res.data

}
//delete
export const deleteCunsumer = async (bno) => {

  const res = await axios.get(`${url}/api/board/list`)

  return res.data

}
//modify
export const putConsumer = async(formData) => {
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }

  const res = await axios.put(`${url}/api/board`, formData, header)

  return res.data

}

