import axios from "axios"
const url = 'http://192.168.0.74:8080'

///////////////////////////////게시판 좋아요////////////////////////////////////////////

export const addBoardLike = async (tomno , params) => {
  
  const res = await axios.post(`${url}/api/boardfavorite/${tomno}` , params)

  return res.data
  
}

export const deleteBoardLike = async (tomno , params) => {
  
  const res = await axios.delete(`${url}/api/boardfavorite/${tomno}` , params)

  return res.data
  
}

export const countBoardLike = async (tomno , params) => {
  
  const res = await axios.post(`${url}/api/boardfavorite/${tomno}` , params)

  return res.data
  
}

export const ListBoardLike = async (tomno , params) => {
  
  const res = await axios.post(`${url}/api/boardfavorite/${tomno}` , params)

  return res.data
  
}


//////////////////////////////////구매 게시판 좋아요/////////////////////////////////////////

export const addProductLike = async (tomno , params) => {
  
  const res = await axios.post(`${url}/api/productfavorite/${tomno}` , params)

  return res.data
  
}

export const deleteProductLike = async (tomno , params) => {
  
  const res = await axios.post(`${url}/api/productfavorite/${tomno}` , params)

  return res.data
  
}

export const countProductLike = async (tomno , params) => {
  
  const res = await axios.post(`${url}/api/productfavorite/${tomno}` , params)

  return res.data
  
}

export const ListProductLike = async (tomno , params) => {
  
  const res = await axios.post(`${url}/api/productfavorite/${tomno}` , params)

  return res.data
  
}