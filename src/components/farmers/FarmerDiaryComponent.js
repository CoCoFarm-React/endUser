import { useEffect, useState } from "react"
import { sampleImg } from "../../public/cocofarm6.png"
import { getDiaryList, getList } from "../../api/FarmerAPI"
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

const FarmerDiaryComponent = ({queryObj, movePage, moveRead}) => {

  const [listData, setListData] = useState(initState)

  

  // Test (j1 project)
  useEffect(() => {

    queryObj.cateno = 3

    getList(queryObj).then(data => {
      console.log("Diary Component: " + data)
      setListData(data)
    })
  },[queryObj])


  return ( 

    <div className="flex container h-[1200px] mt-3 ">

      <ul className="flex flex-wrap container items-center justify-center ">
      
        <div className=" w-full ">

          {listData.dtoList.map(({bno,title,writer,regDate,nickname,rcnt,cateno, content}) => (
            <li className="flex h-auto bg-white m-2 p-2 rounded-md border-2 border-gray-400" key={bno}
            onClick={() => moveRead(bno)}>
              <div className="w-44">

                <div className="flex  items-center hover:cursor-pointer w-36 h-32 bg-slate-300">
                  <img src="https://media.istockphoto.com/id/184276818/ko/%EC%82%AC%EC%A7%84/%EB%A0%88%EB%93%9C-%EC%82%AC%EA%B3%BC%EB%82%98%EB%AC%B4.jpg?s=612x612&w=0&k=20&c=qe0XwDHYbQFgVaqM2unXZWVqI7kV2SSfXrCYaHsdmWM=" 
                    alt="defaultImg" className="w-36 h-32"></img>
                </div>
                <div className="text-center text-black font-extrabold mt-3">
                  <div className="font-bold hover:cursor-pointer">{title}</div>
                  <div className="text-gray-500 text-xs">{regDate}</div>
                  
                </div>

              </div>

              <div className="w-full bg-yellow-100 ml-5 whitespace-pre-line" >
                <div className="ml-3 ">
                  <div className="font-bold hover:cursor-pointer">{content}</div>
                  {/* 오늘은 가지를 수확했습니다!<br/>
                  가지가 싱싱해요!<br/>
                  구입문의 : 010-3333-5555 */}
                  
                </div>
              </div>
            </li>

          ))}
        </div>
        
        <FarmerPageComponent movePage={movePage}{...listData}></FarmerPageComponent>

      </ul>


    </div>
   );
}
 
export default FarmerDiaryComponent;