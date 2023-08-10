import axios from "axios"

export const postLogin = async(params) => {

  let header = {
      headers: {
          "content-type": "application/x-www-form-urlencoded",
      }
  }

  const res = await axios.post('http://192.168.0.74:8080/api/member/login', params, header)

  return res.data
  
}