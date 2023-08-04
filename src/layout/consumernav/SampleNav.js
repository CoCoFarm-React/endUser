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
                <Link to="/consumer/list">BOARD</Link>
            </div>
            <div>
                LOGIN
            </div>
        </div>
    );
}
 
export default SampleNav;