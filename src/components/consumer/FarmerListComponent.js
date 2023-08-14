import { useEffect, useState } from "react";
import { getFarmerList } from "../../api/ConsumerAPI";
import PageComponent from "./PageComponent";
import { getFarmerOne, getList } from "../../api/FarmerAPI";


const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO:null
}


const FarmerListComponent = ({queryObj, movePage, moveRead2}) => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {

      getList(queryObj).then(data => {
            console.log("====================")
            console.log(data)
            setListData({...data})
        })

    }, [queryObj])

    return ( 
        <div>
            <ul className="flex flex-wrap mt-5 border border-[#ddd]">
          {listData.dtoList.map( ({mno, email, nickname, rolename, fname}) => 
            <li
              className="w-1/2 p-10 font-semibold border-b odd:border-r"
              key={mno}
              onClick={() => moveRead2(mno)}
            >
            <div className="text-center">
                <div className="text-2xl mb-3">{mno}</div>
                <div className="text-center">
                  <img className="inline-block" src={`http://localhost/s_${fname}`}/>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mt-3">
                  {nickname}
                </div>
                <div className="text-center text-2xl">
                  Price: {nickname}
                  <div className="text-xl font-normal">
                    {/* <span className="mr-5">ReviewAvg: ({reviewAvg})</span>
                    <span>ReviewCnt: ({reviewCnt})</span> */}
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
        </div>
            

 )}
export default FarmerListComponent;