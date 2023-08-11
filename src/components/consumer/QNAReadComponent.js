import { useEffect, useState } from "react"
import { getCunsumerOne } from "../../api/ConsumerAPI"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux"


const initState = {
    bno:0,
    title:'',
    content:'',
    nickname:'',
    regDate:'',
    modDate:'',
}


const QNAReadComponent = ({moveDelete, moveModify, moveList}) => {

    const [board, setBoard] = useState(initState)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {bno} = useParams();

    console.log(bno)

    useEffect(() => {
        getCunsumerOne(bno).then(data => {
            console.log("==========-----==========")
            console.log(data)
            setBoard(data)
        })
    }, [bno])

    return ( 

        <div className="items-center justify-center container flex">

        <table className="w-[1200px] items-center justify-center">
          <thead className="">
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
      
        </table>
        <div>
                <button 
                    className="bg-orange-400 border-2 m-2 p-2 text-white font-bold"
                    onClick={() => moveModify(board.bno)}
                >
                    Modify
                </button>
                <button 
                    className="bg-blue-500 border-2 m-2 p-2 text-white font-bold"
                    onClick={moveList}
                >
                    List
                </button>
                <button 
                    className="bg-blue-500 border-2 m-2 p-2 text-white font-bold"
                    onClick={moveDelete}
                >
                    Delete
                </button>
            </div>
      </div>

     );

}
 
export default QNAReadComponent;