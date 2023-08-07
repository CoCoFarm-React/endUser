import TopNav from "./nav/TopNav";
import mainWrap from "/project/enduser/src/public/mainWrap_01.jpg"
import farmerLogin from "../../public/farmerlogin.png"
import memberLogin2 from "../../public/memberlogin.png"

const BasicLayout = () => {
  return ( 

    <div className="container mx-[auto] w-[1280px] ">

      <div>
        <TopNav></TopNav>
      </div>

      <div className="container h-[600px]  mt-3  flex flex-col">
        {/* <img className="h-[500px] w-[1280px]" alt="mainWrap" src={mainWrap} /> */}

        <div className=" h-[150px] w-[1280px] box1">
          Login Page
        </div>

        <div className="flex flex-row">
          
          <div className="w-1/2 h-[400px] box2 container flex bg-yellow-300">
            
            <div className="flex flex-col items-center justify-center ">
            
              <div className="mt-4 text-2xl flex items-center justify-center text-center">
                생산자로그인
              </div>
              
              <img className="h-[200px] mt-12 rounded-md shadow-2xl hover:scale-125" alt="mainWrap" src={farmerLogin} />

            </div>
            
          </div>

          <div className=" w-1/2 h-[400px] box3 item-center justify-center container flex">
            <img className="h-[200px] mt-12 mr-36 rounded-md shadow-xl hover:scale-125" alt="mainWrap" src={memberLogin2} />
          </div>

        </div>

      </div>


    </div>

   );
}
 
export default BasicLayout;