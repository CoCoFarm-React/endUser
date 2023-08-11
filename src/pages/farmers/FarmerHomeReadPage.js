import { useParams } from "react-router-dom"
import FarmerBoardReadComponent from "../../components/farmers/FarmerBoardReadComponent"
import useQueryObj from "../../hooks/farmers/useQueryObj"
import TopNav from "../../layouts/farmers/nav/TopNav"


const FarmerHomeReadPage = () => {  

  const {queryObj, moveBoardList} = useQueryObj()
  const {pno} = useParams()

  console.log(pno)
  console.log(queryObj)

  return (
    
    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>
      
      <div className="mt-5">
        <FarmerBoardReadComponent pno={pno}></FarmerBoardReadComponent>
        <button 
            className="border-2 w-20 mt-4 p-2 rounded-md bg-gray-600 text-white "
            onClick={() => moveBoardList()}>List</button>
      </div>

      
    </div>
   );
}
 
export default FarmerHomeReadPage;