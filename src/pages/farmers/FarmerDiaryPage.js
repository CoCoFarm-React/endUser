import FarmerDiaryComponent from "../../components/farmers/FarmerDiaryComponent";
import FarmerPageComponent from "../../components/farmers/FarmerPageComponent";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerDiaryPage = () => {



  return ( 

    <div className="container mx-[auto] w-[1280px]">
      
      <div>
        <TopNav></TopNav>
      </div>

      <div>
        <FarmerDiaryComponent>

        </FarmerDiaryComponent>
      </div>


    </div>

   );
}
 
export default FarmerDiaryPage;