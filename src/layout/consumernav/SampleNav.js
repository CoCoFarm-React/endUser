import { Link } from "react-router-dom";

const SampleNav = () => {
    return ( 
        <div className="relative px-4 py-4 flex justify-between items-center bg-white">
            <div className='m-4 font-size-16px font-serif' >
                <Link to="/">Main</Link>
            </div>
            <div  className='ml-20 font-size-16px font-serif'>
                <Link to="/about">About</Link>
            </div>
            <div  className='ml-20 font-size-16px font-serif'>
                <Link to="/products/list">Products</Link>
            </div>
            <div  className='ml-20 font-size-16px font-serif'>
                <Link to="/board/list">Board</Link>
            </div>
        </div>
    );
}
 
export default SampleNav;