import { useEffect, useState } from "react"
import {getCookies,setCookie} from "../../util/cookieUtil"
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"


const MyComponent = () => {

  const [params] = useSearchParams()

  const dataStr = params.get("data")

  console.log(dataStr)
  
  let dataObj = JSON.parse(dataStr)

  //소셜로그인 첫 회원인지 판단
  let social = ""
  //rolename으로 재배자인지 소비자인지 판단.
  let rolename = ""

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  let queryStringObject = {}

  
  if(dataStr === null){
    const mno = queryParams.get('mno');
    const email = queryParams.get('email');
    const pw = queryParams.get('pw');
    const pw2 = queryParams.get('pw2');
    const tel = queryParams.get('tel');
    const nickname = queryParams.get('nickname');
    const address = queryParams.get('address');
    const zonecode = queryParams.get('zonecode');
    const ebaddress = queryParams.get('ebaddress');
    const rolename = queryParams.get('rolename');
    const social = false;
  
    queryStringObject = {
      mno,
      email,
      pw,
      pw2,
      tel,
      nickname,
      address,
      zonecode,
      ebaddress,
      rolename,
      social
    };

  }else{

    social = dataObj.social;
    rolename = dataObj.roleName;

  }
  
  console.log(rolename)
  const navigate = useNavigate();

  useEffect(() => {

    const loadCookie = () => {
      const loginObj = getCookies("login")

      console.log("확인용------------------------------------------------------")
      console.log(dataObj)
      console.log("확인용------------------------------------------------------")

      if (loginObj) {
        return
      }
      
      console.log(JSON.stringify(queryParams))
      console.log(queryParams)
      if(queryParams === null){
        return setCookie("login", JSON.stringify(dataObj), 1)
      }else{
        return setCookie("login", JSON.stringify(queryStringObject), 1)
      }
    }
    
    if(social){
      
      alert("수정페이지로 이동합니다.")
      navigate('../member/modify')
      
    }else{
      console.log("rolename------------------------------------------------------")
      console.log(rolename)
      console.log("rolename------------------------------------------------------")

      if(rolename === 'CONSUMER'){
        navigate('../consumer/list')
      }else if(rolename === 'FARMER'){
        navigate('../farmer/home')
      }

    } 

    loadCookie()
  }, [])

  
  return (
    <div>
      잘들어왔어 반가워
    </div>
  );
}

export default MyComponent;