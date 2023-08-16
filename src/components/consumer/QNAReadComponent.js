import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router"
import useQueryObj from "../../hooks/consumers/useQueryObj"
import { getOne } from "../../api/ConsumerAPI"


const initState = {
    bno:0,
    title:'',
    content:'',
    nickname:'',
    regDate:'',
    modDate:'',
}


const QNAReadComponent = ({moveDelete, moveModify, moveList}) => {

    //const {bno} = useParams()
    const [board, setBoard] = useState(initState)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {bno} = useParams();

    console.log(bno)

    useEffect(() => {

        getOne(bno).then(data => {
            console.log("==========-----==========")
            console.log(data)
            setBoard(data)
        })
        
    }, [bno])

    return ( 

        <div className="w-[1200px] items-center justify-center m-auto">
            <table className="w-full">
                <thead>
                    <tr className="h-12 font-medium text-center">
                        <td className="border-2  w-32">NO.</td>
                        <td className="border-2 ">TITLE</td>
                        <td className="border-2 ">CONTENT</td>
                        <td className="border-2 ">NICKNAME</td>
                        <td className="border-2 ">REGDATE</td>
                        <td className="border-2 ">MODDATE</td>
                    </tr>
                </thead>
                
                <tbody>
                    <tr className="font-medium text-center">
                        <td className="border-2">{board.bno}</td>
                        <td className="border-2">{board.title}</td>
                        <td className="border-2">{board.content}</td>
                        <td className="border-2">{board.nickname}</td>
                        <td className="border-2">{board.regDate}</td>
                        <td className="border-2">{board.modDate}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button 
                    className="bg-orange-400 border-2 m-2 p-2 font-bold"
                    onClick={() => moveModify(board.bno)}>
                    MODIFY
                </button>
                <button 
                    className="bg-blue-500 border-2 m-2 p-2 font-bold"
                    onClick={moveList}>
                    LIST
                </button>
                <button 
                    className="bg-blue-500 border-2 m-2 p-2 font-bold"
                    onClick={moveDelete}>
                    DELETE
                </button>
            </div>
        </div>

     );

}
 
export default QNAReadComponent;