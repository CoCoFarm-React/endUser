import { useEffect, useState } from "react";
import { getOne } from "../../api/FarmerAPI";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import { useParams } from "react-router";

const initState = {
  bno:0,
  title:'',
  content:'',
  writer:'',
  reg:'',
  modDate:'',
  nickname:'',
  email:''
  
}

const FarmerQAReadComponent = () => {

  const {queryObj, moveList, moveModify} = useQueryObj()
  const {bno} = useParams()

  const [board, setBoard] = useState(initState)

  useEffect(() => {

    getOne(bno).then(data => {

console.log("ReadCom data:"+data)
console.log("ReadCom data:"+data)
console.log("ReadCom data:"+data)
console.log("ReadCom data:"+data)
      setBoard(data)
console.log("ReadCom data:"+data)
console.log("ReadCom data:"+data)
console.log("ReadCom data:"+data)



      console.log("ReadCom data:"+data)
    })
  },[bno])

  return ( 
    <div className="items-center justify-center container flex">

      <div>
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
              <td className="border-2 font-medium text-center">Email</td>
              <td className="border-2">{board.email}</td>
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
              <td className="border-2 font-medium h-10 text-center">Title</td>
              <td className="border-2">{board.title}</td>
          </tr>
          
          <tr >
              <td className="border-2 font-medium h-80 text-center">Content</td>
              <td className="border-2">{board.content}</td>             
          </tr>


            
        </thead>

        <div className="flex">
        <button         
        onClick={() => moveModify(board.bno)}
        className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
        >Modify
        </button>

       <button 
        onClick={moveList}
        className="bg-green-600 rounded-md w-20 p-2 m-2 ml-20 text-white"
        >List
        </button>
      </div>
         
      </table>

      </div>
      

    </div>
   );
}
 
export default FarmerQAReadComponent;