import axios from "axios"

export const getAccessToken = async (authCode) => {

    const REST_KEY = '6f4e3dc1bc490e8e161bcf59dd0aa57f'
    const REDIRECT_URI ='http://localhost:3000/member/kakao'
    const AUTH_TOKEN_URL="https://kauth.kakao.com/oauth/token"

    const kakaoURL =`https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

    let header = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        }
    }

    const params = {
        grant_type: "authorization_code",
        client_id: REST_KEY, 
        redirect_uri: REDIRECT_URI, 
        code: authCode
    }

    const res = await axios.post(AUTH_TOKEN_URL , params , header)

    const {access_token} = res.data

    return access_token

}


// 3단계 유저정보 가지고 오기
const KAKAO_USER = "https://kapi.kakao.com/v2/user/me"

export const getUserEmail = async (access_token) => {

    let header = {
        headers: {
            "Authorization": `Bearer ${access_token}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",

        }
    }

    const res = await axios.get(KAKAO_USER , header)

    const {kakao_account} = res.data
    console.log(kakao_account);

    return kakao_account.email

}