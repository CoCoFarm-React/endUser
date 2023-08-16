import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
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
  email:'',
  fname:'',
  images:[]
  
}

const FarmerDiaryReadComponent = () => {

  const {queryObj, moveList, moveModify} = useQueryObj()
  const {bno} = useParams()
  const nav = useNavigate()

  const [board, setBoard] = useState(initState)
  const [files, setFiles] = useState([]);

  useEffect(() => {

    getOne(bno).then(data => {
      setBoard(data)

      console.log("ReadCom data:"+data)

      const fileList = data.fname ? data.fname.split(',') : [];       
      setFiles(fileList);

    }).catch(e => {

      alert("asd")
    })
  },[bno])

  return ( 

    <div className="m-2 p-2">

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Pno</div>
          <div>{board.bno}</div>
      </div>
          
      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품이름</div>
          <div>{board.nickname}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Reg</div>
          <div>{board.email}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">ModDate</div>
          <div>{board.reg}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품설명</div>
          <div>{board.modDate}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품가격</div>
          <div>{board.title}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품가격</div>
          <div>{board.content}</div>
      </div>

      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">상품사진</div>                 
        <div>
          <ul className="list-none">
            {files.map((filelist, idx) =>                     
              <li key={idx}
                  className="mb-2"
              >
                <img src={`http://192.168.0.74/${filelist}`} alt='ddd' className="w-[600px] h-[600px]"></img>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* 상품 이미지 map //end */}

      <div>

        <button         
        onClick={() => moveModify(board.bno)}
        className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
        >Modify
        </button>
        <button 
        onClick={() => nav("/farmer/diary/")}
        className="bg-green-600 rounded-md w-20 p-2 m-2 ml-20 text-white"
        >List
        </button>
    
      </div>

    </div>
    // <div className="items-center justify-center container flex">

    //   <div>
    //   <table className="w-[1200px] items-center justify-center">
    //     <thead className="">
    //       <tr className="bg-gray-200">
    //           <td className="border-2 font-medium w-32 text-center ">No</td>
    //           <td className="border-2">{board.bno}</td>
    //       </tr>

    //       <tr >
    //           <td className="border-2 font-medium text-center">NickName</td>
    //           <td className="border-2">{board.nickname}</td>
    //       </tr>

    //       <tr >
    //           <td className="border-2 font-medium text-center">Email</td>
    //           <td className="border-2">{board.email}</td>
    //       </tr>

    //       <tr >
    //           <td className="border-2 font-medium text-center">RegDate</td>
    //           <td className="border-2">{board.reg}</td>
    //       </tr>

    //       <tr >
    //           <td className="border-2 font-medium text-center">ModDate</td>
    //           <td className="border-2">{board.modDate}</td>
    //       </tr>

    //       <tr >
    //           <td className="border-2 font-medium h-10 text-center">Title</td>
    //           <td className="border-2">{board.title}</td>
    //       </tr>
          
    //       <tr >
    //           <td className="border-2 font-medium h-80 text-center">Content</td>
    //           <td className="border-2">{board.content}</td>             
    //       </tr>


            
    //     </thead>

    //     <div className="flex">
    //     <button         
    //     onClick={() => moveModify(board.bno)}
    //     className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
    //     >Modify
    //     </button>

    //    <button 
    //     onClick={() => nav("/farmer/diary/")}
    //     className="bg-green-600 rounded-md w-20 p-2 m-2 ml-20 text-white"
    //     >List
    //     </button>
    //   </div>
         
    //   </table>

    //   </div>
      

    // </div>
   );
}
 
export default FarmerDiaryReadComponent;