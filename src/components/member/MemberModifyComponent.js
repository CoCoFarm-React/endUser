import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { insertMember } from "../../api/LoginApi"

const initState = {
    email:'user00@aaa.com',
    pw:'1111',
    pw2:'1111',
    tel:'010-1111-2222',
    nickname:''

}

const MemberModifyComponent = () => {

    // const loginSlice = useSelector(state => state.login)

    const [loginInfo , setloginInfo] = useState({...initState})

    const nav = useNavigate()

    const handleChange = (e) => {

        loginInfo[e.target.name] = e.target.value
        setloginInfo({...loginInfo})


    }

    const registInsert = (e) => {

        
        if(loginInfo.pw !== loginInfo.pw2){
            //나중에 모달로 바꿔야함
            alert("비밀번호를 확인해주세요.");
            return
        }




        
        insertMember(loginInfo).then(data => {

            console.log(data);

        })

    } 


    return (
        <div>

            <div className="mt-24 w-3/6 border-4 border-gray-800 rounded-xl bg-slate-100">

                <div className="flex justify-between">
                    <div className="m-2 text-3xl pl-2">회원정보수정</div>
                    <div className="m-2 pl-2">*표시는 필수 입력사항</div>
                </div>
                <table className="m-4">
                    <tr className="">
                        <td>
                            <label>*Email</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="text" name="email" value={loginInfo.email} onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>*비밀번호 : </label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="password" name="pw" value={loginInfo.pw} onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>*비밀번호 확인:</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="password" name="pw2" value={loginInfo.pw2} onChange={handleChange}></input>
                            <button className="bg-orange-500 p-2">비밀번호 확인</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>

                    <tr >
                        <td>
                            <label>*연락처</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="tel" name="tel" value={loginInfo.tel} onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>

                    <tr >
                        <td>
                            <label>*닉네임</label>
                        </td>
                        <td className="border-2 bg-white">
                            <input type="text" name="nickname" value={loginInfo.nickname} onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>


                    

                    <tr>
                        <td className="">
                        </td>
                        <td className=" pt-2 pl-0">
                            <button className="border-4 border-gray-600 p-2 rounded-xl" onClick={() => registInsert()}>
                                수정완료
                            </button>
                            <button className="ml-2 border-4 border-gray-600 p-2 rounded-xl" onClick={() => nav("../consumer/list")}>
                                취   소
                            </button>
                        </td>
                    </tr>

                </table>
            </div>

        </div>
    );
}

export default MemberModifyComponent;