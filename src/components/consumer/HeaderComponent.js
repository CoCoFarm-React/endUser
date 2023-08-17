import { Link, useNavigate } from "react-router-dom";
import { requestLogout } from "../../reducers/loginSlice";
import { useDispatch } from "react-redux";


const HeaderComponent = () => {

    const dispatch = useDispatch();
    const nav = useNavigate()

    const logout = () => {
        alert("11")
        dispatch(requestLogout())
        alert("22")
        nav("/")   
    }

    return ( 

        <header className="
         w-[1280px] mt-auto bg-green-200">
            <div className="flex w-4/5 max-w-screen-lg h-full m-auto items-center justify-between">
                <h2 className="font-semibold text-2xl">HEADER</h2>
                
                <div className='m-10'>
                    <Link to="/consumer">로고이미지</Link>
                </div>
                <div className='flex list-none'>
                    <div className='m-5'><Link to="/consumer/mainpage">MAIN</Link></div>
                    <div className='m-5'><Link to="/consumer/farmerlistpage">FARMERLIST</Link></div>
                    <div className='m-5'><Link to="/consumer/qnapage">Q&A</Link></div>
                    <div className='m-5'><Link to="/consumer/mypage">MY PAGE</Link></div>
                    
                    <button 
                    className="m-5 rounded-md hover:bg-white text-center text-sm"
                    onclick={logout}
                    >
                        LogOut
                    </button>
                    
                </div>

                
            </div>
        </header>

     );

}

 
export default HeaderComponent;