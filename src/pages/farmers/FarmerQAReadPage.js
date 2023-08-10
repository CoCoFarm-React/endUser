import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import FarmerQAReadComponent from "../../components/farmers/FarmerQAReadComponent";
import TopNav from "../../layouts/farmers/nav/TopNav";

const FarmerQAReadPage = () => {

  const {queryObj, moveList, moveModify} = useQueryObj()
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
        <FarmerQAReadComponent></FarmerQAReadComponent>
        {/* <button         
        onClick={() => moveModify({bno})}
        className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
        >Modify
      </button>

      <button 
        onClick={moveList}
        className="bg-green-600 rounded-md w-20 p-2 m-2 ml-20 text-white"
        >List
      </button> */}
      </div>

      
    </div>

   );
}
 
export default FarmerQAReadPage;