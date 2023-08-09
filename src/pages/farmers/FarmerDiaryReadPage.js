import { useEffect, useState } from "react"
import { getOne } from "../../api/FarmerAPI"
import TopNav from "../../layouts/farmers/nav/TopNav"
import { useParams } from "react-router"
import useQueryObj from "../../hooks/farmers/useQueryObj"
import FarmerQAReadComponent from "../../components/farmers/FarmerQAReadComponent"


const FarmerDiaryReadPage = () => {
  
  
  const {queryObj, moveDiaryList} = useQueryObj()
  const {bno} = useParams()

  console.log(bno)
  console.log(queryObj)

  return ( 
    
    
    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>
      
      <div className="mt-5">
        <FarmerQAReadComponent bno={bno}></FarmerQAReadComponent>
        <button 
            className="border-2 w-20 mt-4 p-2 rounded-md bg-gray-600 text-white "
            onClick={() => moveDiaryList()}>List</button>
      </div>

      
    </div>

   );
}
 
export default FarmerDiaryReadPage;