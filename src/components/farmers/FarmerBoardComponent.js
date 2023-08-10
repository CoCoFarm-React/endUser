import { useEffect } from "react"
import { useState } from "react"
import { getList } from "../../api/productAPISong"
import FarmerPageComponent from "./FarmerPageComponent"

const initState = {
  dtoList:[],
  end:0,
  start:0,
  next:false,
  prev:false,
  pageNums:[],
  page:0,
  size:0,
  requestDTO:null,
  regDate:''
}

const FarmerBoardComponent = ({queryObj, movePage, moveRead}) => {

  const [listData, setListData] = useState(initState)  

  useEffect(() => {

    // queryObj.cateno = 3

    getList(queryObj).then(data => {
      console.log("FarmBoard Component: " + data)
      setListData(data)
    })
  },[queryObj])


  return ( 

    <div className="h-[1200px] mt-3">

      <ul className="flex flex-wrap container justify-center">      
        
        {listData.dtoList.map(({pno, pdesc, pname, price}) => (
          <li className="h-[300px] w-1/6 
            m-2 p-2 rounded-md border-2 border-gray-400" key={pno}
          onClick={() => moveRead(pno)}>

            <div className="justify-center">

              <div className="hover:cursor-pointer w-36 h-32 mx-auto mt-4">
                <img src="https://cdn.mygoyang.com/news/photo/202006/55231_61251_4957.jpg" 
                  alt="defaultImg" className="w-36 h-32"></img>
              </div>

              <div className="justify-center mt-5">
                <div className="text-center text-gray-500">{pno}</div>
                <div className="text-center text-black font-bold hover:cursor-pointer">{pname}</div>
                <div className="text-center text-gray-500">{pdesc}</div>
                
              </div>

            </div>

            <div className="justify-center whitespace-pre-line mt-5" >
              
                <div className="font-bold hover:cursor-pointer mt-1 truncate text-center text-red-600">
                  {(price+'').replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원'} <br></br>
                  
                </div>                
              
            </div>
          </li>

        ))}        
        
        

      </ul>
        
      <FarmerPageComponent movePage={movePage}{...listData}></FarmerPageComponent>
      

    </div>

  );
}

export default FarmerBoardComponent;