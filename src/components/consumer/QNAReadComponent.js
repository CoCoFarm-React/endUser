import { useEffect, useState } from "react"
import { getOne } from "../../api/ConsumerAPI"
import { useParams } from "react-router-dom"
import useQueryObj from "../../hooks/consumers/useQueryObj"


const initState = {
    bno:0,
    title:'',
    content:'',
    nickname:'',
    regDate:'',
    modDate:'',
}


const QNAReadComponent = ({bno}) => {

    const {queryObj, moveList, moveModify} = useQueryObj()
    // const {bno} = useParams()
    const [board, setBoard] = useState(initState)

    useEffect(() => {
        getOne(bno).then(data => {
            console.log("==========-----==========")
            console.log(data)
            setBoard(data)
        })
    }, [bno])

    return ( 

        <div className="flex items-center justify-center container">
            <table className="w-[1200px] items-center justify-center">
                <thead>
                    <tr className="h-12 font-medium text-center">
                        <td className="border-2 font-medium">NO.</td>
                        <td className="border-2">TITLE</td>
                        <td className="border-2">CONTENT</td>
                        <td className="border-2">NICKNAME</td>
                        <td className="border-2">REGDATE</td>
                        <td className="border-2">MODDATE</td>
                    </tr>
                </thead>
                
                <tbody>
                    <tr className="h-12">
                        <td className="border-2">{board.bno}</td>
                        <td className="border-2">{board.title}</td>
                        <td className="border-2">{board.content}</td>
                        <td className="border-2">{board.nickname}</td>
                        <td className="border-2">{board.regDate}</td>
                        <td className="border-2">{board.modDate}</td>
                    </tr>
                </tbody>

                <div className="flex">
                    <button         
                    onClick={() => moveModify(board.bno)}
                    className=" w-20 p-2 m-2 border-2 rounded-md">
                        Modify
                    </button>
                    <button 
                    onClick={moveList}
                    className="w-20 p-2 m-2 ml-20 border-2 rounded-md">
                        List
                    </button>
                </div>
            </table>
        </div>

     );

}
 
export default QNAReadComponent;