import TopNav from "./nav/TopNav";
import farmerLogin from "../../public/farmerlogin.png"
import memberLogin2 from "../../public/memberlogin.png"
import { Link } from "react-router-dom";

const BasicLayout = () => {
  return ( 

    <div className="container mx-[auto] w-[1280px] ">

      {/* <div>
        <TopNav></TopNav>
      </div> */}

      <div className="container h-[600px]  mt-3  flex flex-col">
        
        {/* 추후삭제 */}
        <div className=" h-[150px] w-[1280px] box1">
          Login Page
        </div>
        {/* 추후삭제 */}

        <div className="flex flex-row">
          
          <div className="w-1/2 h-[400px] box2 container flex items-center justify-center">
            
            <div className="flex flex-col items-center justify-center ml-52">

              
            
              <div className="mt-4 text-2xl flex items-center justify-center text-center">
                생산자로그인
              </div>
              
              <Link to="/farmer/signin">
              <img className="h-[200px] mt-12 rounded-md shadow-2xl hover:scale-125 hover:cursor-pointer" 
                  alt="mainWrap" src={farmerLogin} />
              </Link>
            </div>
            
          </div>

          <div className="w-1/2 h-[400px] box2 container flex items-center justify-center">
            
            <div className="flex flex-col items-center justify-center mr-52">
            
              <div className="mt-4 text-2xl flex items-center justify-center text-center">
                소비자로그인
              </div>
              
              

             
              <Link to="/consumer">
              <img className="h-[200px] mt-12 rounded-md shadow-2xl hover:scale-125 hover:cursor-pointer" 
                  alt="mainWrap" src={memberLogin2} />
              </Link>
            </div>
            
          </div>

        </div>

      </div>


    </div>

   );
}
 
export default BasicLayout;