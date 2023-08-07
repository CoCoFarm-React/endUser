import { useEffect, useState } from "react";
import { getOne } from "../../api/FarmerAPI";

const initState = {
  bno:0,
  title:'',
  content:'',
  writer:'',
  reg:'',
  modDate:'',
  nickname:''
  
}

const FarmerQAReadComponent = ({bno}) => {

  const [board, setBoard] = useState(initState)

  useEffect(() => {

    getOne(bno).then(data => {
      setBoard(data)

      console.log("ReadCom data:"+data)
    })
  },[bno])

  return ( 
    <div className="items-center justify-center container flex">

      <table className="w-[1200px] items-center justify-center">
        <thead className="">
          <tr className="bg-gray-200">
              <td className="border-2 font-medium w-32 text-center ">No</td>
              <td className="border-2">{board.bno}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">NickName</td>
              <td className="border-2">{board.nickname}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">Title</td>
              <td className="border-2">{board.title}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">RegDate</td>
              <td className="border-2">{board.reg}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">ModDate</td>
              <td className="border-2">{board.modDate}</td>
          </tr>
          
          <tr >
              <td className="border-2 font-medium h-80 text-center">Content</td>
              <td className="border-2">{board.content}</td>
          </tr>


            
        </thead>
    
      </table>

    </div>
   );
}
 
export default FarmerQAReadComponent;