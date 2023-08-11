import { useEffect, useState } from "react"
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

    const {queryObj, moveList, moveModify} = useQueryObj()
    // const {bno} = useParams()
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

        <div className="w-[1200px] items-center justify-center">
            <table>
                <thead>
                    <tr className="h-12">
                        <td className="border-2 font-medium w-32 text-center ">NO.</td>
                        <td className="border-2 font-medium text-center">TITLE</td>
                        <td className="border-2 font-medium h-80 text-center">CONTENT</td>
                        <td className="border-2 font-medium text-center">NICKNAME</td>
                        <td className="border-2 font-medium text-center">REGDATE</td>
                        <td className="border-2 font-medium text-center">MODDATE</td>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td className="border-2">{board.bno}</td>
                        <td className="border-2">{board.title}</td>
                        <td className="border-2">{board.content}</td>
                        <td className="border-2">{board.nickname}</td>
                        <td className="border-2">{board.regDate}</td>
                        <td className="border-2">{board.modDate}</td>
                    </tr>
                </tbody>
            </table>
        </div>

     );

}
 
export default QNAReadComponent;