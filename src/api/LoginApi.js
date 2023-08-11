import axios from "axios"
export const postLogin = async(params) => {

  //json 형식을 문자열로 보낼때 쓴다.
  let header = {
      headers: {
          "content-type": "application/x-www-form-urlencoded",
      }
  }

  const res = await axios.post('http://192.168.0.74:8080/api/member/login', params, header)

  return res.data
  
}


export const insertMember = async(params) => {

  let header = {
    headers: {
        "content-type": "application/x-www-form-urlencoded",
    }
  }
  console.log("===========================================")
  console.log(params);
  console.log("===========================================")

  const res = await axios.post('http://192.168.0.48:8080/api/member/register',params,header)

  return res.data
  
}