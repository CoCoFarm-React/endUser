import FarmerBoardComponent from "../../components/farmers/FarmerBoardComponent";
import FarmerHomeComponent from "../../components/farmers/FarmerHomeComponent";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerHomePage = () => {
  return ( 

    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>
      
      {/* <div className=" flex container h-[200px] mt-3">
        
        <div className=" w-[300px] flex justify-center items-center">
          <img src={farmImage01} alt="farmImage01" 
          className="rounded-[50%] object-cover w-[180px] h-[180px] justify-center flex">

          </img>
        </div>

        <div className="bg-green-300 w-full flex">
            11111
        </div>

      </div> */}

      <div>
        <FarmerHomeComponent></FarmerHomeComponent>
      </div>

      <div>
        <FarmerBoardComponent></FarmerBoardComponent>
      </div>


    </div>
    

   );
}
 
export default FarmerHomePage;