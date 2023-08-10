import { useEffect, useState } from "react";
import { readOne } from "../../api/productAPISong";

const initState = {
  pno:0,
  pname:'',
  price:'',
  writer:'',
  reg:'',
  modDate:'',
  fname:'',
  flist:['123.jpg','aaa.jpg']  
  
}

const FarmerBoardReadComponent = ({pno}) => {

  const [board, setBoard] = useState(initState)

  useEffect(() => {

    readOne(pno).then(data => {
      setBoard(data)

      console.log("ReadCom data:"+data)
    })
  },[pno])

  return ( 
    <div className="items-center justify-center container flex">

      <table className="w-[1200px] items-center justify-center">
        <thead className="">
          <tr className="bg-gray-200">
              <td className="border-2 font-medium w-32 text-center ">Pno</td>
              <td className="border-2">{board.pno}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">Pname</td>
              <td className="border-2">{board.pname}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">Price</td>
              <td className="border-2">{board.price}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">RegDate</td>
              <td className="border-2">{board.reg}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">ModDate</td>
              <td className="border-2">{board.modDate}</td>
          </tr>

          {/* <tr >
              <td className="border-2 font-medium h-10 text-center">Title</td>
              <td className="border-2">{board.title}</td>
          </tr> */}
          
          <tr >
              <td className="border-2 font-medium h-80 text-center">Fname</td>
              <td className="border-2">{board.fname}</td>             
          </tr>

          {/* <tr>
            <td className="border-2 font-medium h-80 text-center">Fname</td>
            <td className="border-2">
              <ul>
                {board.fname.map( fileList => <li>{fileList}</li>
                )}
              </ul>
            </td>
          </tr> */}

            
        </thead>
    
      </table>

    </div>
   );
}
 
export default FarmerBoardReadComponent;