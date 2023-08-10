import { useEffect, useState } from "react"
import {getCookies,setCookie} from "../../util/cookieUtil"
import { Link, useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"


const MyComponent = () => {

  const [params] = useSearchParams()

  const dataStr = params.get("data")

  const {email} =  useSelector(state => state.login)

  console.log(dataStr)

  const dataObj = JSON.parse(dataStr)

  console.log(dataObj)


  useEffect(() => {

    const loadCookie = () => {
      const loginObj = getCookies("login")


      if (loginObj) {
        return
      }

      return setCookie("login", JSON.stringify(dataObj), 1)
    }

    loadCookie()
  }, [])


  return (
    <div>
    </div>
  );
}

export default MyComponent;