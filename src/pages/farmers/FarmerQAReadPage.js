import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import FarmerQAReadComponent from "../../components/farmers/FarmerQAReadComponent";
import TopNav from "../../layouts/farmers/nav/TopNav";

const FarmerQAReadPage = () => {

  const {queryObj, moveList} = useQueryObj()
  const {bno} = useParams()

  console.log(bno)
  console.log(queryObj)

  return ( 
    
    
    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>

      <div className="text-xl mt-5 text-red-600">
        Q&A Read Page
      </div>
      
      <div className="mt-5">
        <FarmerQAReadComponent bno={bno}></FarmerQAReadComponent>
        <button 
            className="border-2 w-20 mt-4 p-2 rounded-md bg-gray-600 text-white "
            onClick={() => moveList()}>List</button>
      </div>

      
    </div>

   );
}
 
export default FarmerQAReadPage;