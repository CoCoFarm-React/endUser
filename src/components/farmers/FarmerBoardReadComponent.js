import { useEffect, useState } from "react";
import { readOne } from "../../api/productAPISong";
import useQueryObj from "../../hooks/farmers/useQueryObj";

const initState = {
  pno:0,
  pname:'',
  price:'',
  writer:'',
  reg:'',
  modDate:'',
  fname:'',
  images:[]  
  
}

const FarmerBoardReadComponent = ({pno}) => {

  const [board, setBoard] = useState(initState)
  const [files, setFiles] = useState([]);

  const {queryObj, moveBoardList, moveProductModify} = useQueryObj()

  

  useEffect(() => {

    readOne(pno).then(data => {

      console.log("========================================" ,data )
      setBoard(data)
      
      const fileList = data.fname ? data.fname.split(',') : [];       
      setFiles(fileList);

      console.log("ReadCom data:"+ data)

    }).catch(e => {

      alert("asd")

    })
  },[pno])

  return ( 
   
    <div className="m-2 p-2">

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Pno</div>
          <div>{board.pno}</div>
      </div>
          
      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품이름</div>
          <div>{board.pname}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">Reg</div>
          <div>{board.reg}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">ModDate</div>
          <div>{board.modDate}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품설명</div>
          <div>{board.pdesc}</div>
      </div>

      <div className="m-2 p-2 border-2">
          <div className="text-orange-500 font-bold">상품가격</div>
          <div>{board.price}</div>
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
          className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
          onClick={() => moveProductModify(board.pno)}
      
          >Modify</button>
        <button 
          className="border-2 w-20 mt-4 p-2 rounded-md bg-gray-600 text-white "
          onClick={() => moveBoardList()}
      
          >List</button>
    
      </div>

    </div>
  );
}
 
export default FarmerBoardReadComponent;