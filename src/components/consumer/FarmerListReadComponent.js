import { useEffect, useState } from "react";
import useQueryObj from "../../hooks/consumers/useQueryObj";
import { getFarmerOne } from "../../api/ConsumerAPI";
import { useParams } from "react-router-dom";


const initState = {
    mno:0,
    email:'',
    nickname:'',
    rolename:'',
    fname:'',
    regDate:'',
    modDate:'',
}


const FarmerListReadComponent = ({moveList2}) => {

    //const {mno} = useParams()

    // const {queryObj, moveList2} = useQueryObj()
    const [board, setBoard] = useState(initState)

    const {mno} = useParams()

    console.log(mno)

    useEffect(() => {
        getFarmerOne(mno).then(data => {
            console.log("==========-----==========")
            console.log(data)
            setBoard(data)
        })
    }, [mno])

    return ( 
        
        <div className="items-center justify-center container">
            <table className="w-[1200px] items-center m-auto">
                <thead>
                    <tr className="h-12 font-medium text-center">
                        <td className="border-2 font-medium">NO</td>
                        <td className="border-2">Email</td>
                        <td className="border-2">Nickname</td>
                        <td className="border-2">Rolename</td>
                        <td className="border-2">FILE</td>
                    </tr>
                </thead>
                
                <tbody>
                    <tr className="h-12">
                        <td className="border-2">{board.mno}</td>
                        <td className="border-2">{board.email}</td>
                        <td className="border-2">{board.nickname}</td>
                        <td className="border-2">{board.rolename}</td>
                        <td className="border-2">{board.fname}</td>
                    </tr>
                </tbody>

            </table>
            <div className="font-size-16px font-serif text-center mt-5 mb-9">
                    <button 
                    onClick={moveList2}
                    className="w-20 border-2">
                        LIST
                    </button>
                </div>  
        </div>
        
    );
    
}
 
export default FarmerListReadComponent;