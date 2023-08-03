import TopNav from "./nav/TopNav";
import mainWrap from "/project/enduser/src/public/mainWrap_01.jpg"

const BasicLayout = () => {
  return ( 

    <div className="container mx-[auto] w-[1280px] ">

      <div>
        <TopNav></TopNav>
      </div>

      <div className="container h-[500px] mt-3">
        <img className="h-[500px] w-[1280px]" alt="mainWrap" src={mainWrap} />
      </div>


    </div>

   );
}
 
export default BasicLayout;