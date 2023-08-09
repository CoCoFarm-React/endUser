import { useEffect, useState } from "react"
import ConsumerPageComponent from "./ConsumerPageComponent"
import { getCunsumerList, getList } from "../../api/ConsumerAPI"

//import { getList } from "../../api/FarmerAPI";

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


const ConsumerQAComponent = ({queryObj, movePage, moveRead}) => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getCunsumerList(queryObj).then(data => {
          console.log("ConsumerListComponent: " + data)
          setListData(data)
        })
      },[queryObj])



    return ( 
        
        <div className="justify-center items-center container mt-3">

      
        
        <table className="w-[1200px] items-center justify-center container">
  
          <thead>
            <tr className="border-b-2 border-gray-300 text-center h-12">
              <td className="w-1/12 font-serif">No</td>
              <td className="w-7/12 font-serif">Title</td>
              <td className="w-1/12 font-serif">Nickname</td>
              <td className="w-2/12 font-serif">Duedate</td>
              <td className="w-1/12 font-serif">ReplyCnt</td>          
            </tr>
          </thead>
  
          <tbody>
            {listData.dtoList.map( ({bno,title,writer,regDate,replyCount,nickname,rcnt}) => 
              <tr className="border-b-2 border-gray-300 text-center h-12"
                  key={bno}
                  onClick={() => moveRead(bno)}
              >
                <td>{bno}</td>
                <td className="text-left hover:underline hover:cursor-pointer">{title}</td>
                <td>{nickname}</td>
                <td>{regDate}</td>
                <td>{rcnt}</td>
              </tr>
            
            )}
          </tbody>
        </table>
  
        <ConsumerPageComponent movePage={movePage}{...listData}></ConsumerPageComponent>
  
      </div>
  
    );
    
}
 
export default ConsumerQAComponent;