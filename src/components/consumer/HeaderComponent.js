//import styles from '../../styles.css';

import { Link } from "react-router-dom";


const HeaderComponent = () => {

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

                    <Link to="/">
                        <button 
                        className="m-5 rounded-md hover:bg-white text-center text-sm">
                            LogOut
                        </button>
                    </Link>
                </div>

                
            </div>
        </header>

     );

}

 
export default HeaderComponent;