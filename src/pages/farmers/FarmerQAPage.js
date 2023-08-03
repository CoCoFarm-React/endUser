import FarmerListComponent from "../../components/farmers/FarmerListComponent";
import FarmerPageComponent from "../../components/farmers/FarmerPageComponent";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerQAPage = () => {
  return ( 

    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>

      <div>
        <FarmerListComponent></FarmerListComponent>
      </div>

      <div className="mt-5">
        <FarmerPageComponent></FarmerPageComponent>
      </div>

    </div>

   );
}
 
export default FarmerQAPage;