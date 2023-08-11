import { Link } from "react-router-dom";


const SampleNav = () => {
    return ( 
        <div className="relative px-4 py-4 flex justify-between items-center bg-white">
            <div className='m-4 font-size-16px font-serif' >
                <Link to="/">COCOFARM</Link>
            </div>
            <div  className='font-size-16px font-serif'>
                <Link to="/about">ABOUT</Link>
            </div>
            <div  className='font-size-16px font-serif'>
                <Link to="/farmer/home">FARMER</Link>
            </div>
            <div  className='font-size-16px font-serif'>
                <Link to="/consumer/qapage">QnA</Link>
            </div>
            <div  className='font-size-16px font-serif'>
                <Link to="/consumer/mypage">ACCOUNT</Link>
            </div>
            <div>
                <Link to="/">
                    <button 
                    className="border-gray-400 m-3 mt-7 p-1 ml-32 border-2 rounded-md
                    hover:bg-black hover:text-white text-center text-sm">
                    LogOut
                    </button>
                </Link>
            </div>
        </div>
    );
}
 
export default SampleNav;