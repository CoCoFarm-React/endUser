import { useParams } from "react-router-dom"
import FarmerBoardReadComponent from "../../components/farmers/FarmerBoardReadComponent"
import useQueryObj from "../../hooks/farmers/useQueryObj"
import TopNav from "../../layouts/farmers/nav/TopNav"
import ReplyWrapper from "../../components/farmers/reply/ReplyWrapper"


const FarmerHomeReadPage = () => {  

  const {queryObj, moveBoardList} = useQueryObj()
  const {pno, bno} = useParams()

  console.log(pno)
  console.log("Read Reply: "+ bno)
  console.log(queryObj)

  return (
    
    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>
      
      <div className="mt-5">
        <FarmerBoardReadComponent pno={pno}></FarmerBoardReadComponent>

      </div>

      {/* <div>
        <ReplyWrapper bno={bno}></ReplyWrapper>
      </div> */}

      
    </div>
   );
}
 
export default FarmerHomeReadPage;