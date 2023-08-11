import { useEffect, useState } from "react";
import { deleteBoard, getOne, putBoard } from "../../api/ConsumerAPI";


const initState = {
    bno:0,
    title:'',
    content:'',
    writer:'',
    nickname:'',
    email:'',
    regDate:'',
    modDate:''
}


const QNAModifyComponent = ({bno, moveList, moveRead}) => {

    const [board, setBoard] = useState(initState)

    useEffect(() => {

        getOne(bno).then(data => {
            setBoard(data)
            console.log("data: " + data)
        })
        
    }, [bno])

    const handleClickDelete = () => {
        deleteBoard(bno).then(data => {
            alert("삭제되었습니다!!!!!")
        })
    }

    const handleChange = (e) => {
        board[e.target.name] = e.target.value
        setBoard({...board})
    }

    const handleClickModify = () => {

        const formData = new FormData();

        formData.append("bno", board.bno)
        formData.append("title", board.title)
        formData.append("content", board.content)
        formData.append("nickname", board.nickname)
        formData.append("regDate", board.regDate)
        formData.append("modDate", board.modDate)

        putBoard(formData).then(data => {
            alert("수정되었습니다!!!!!")
            moveRead(bno)
        })
    }

    return ( 

        <div className="flex items-center justify-center container">
            <table className="w-[1200px] items-center justify-center mt-5">

                <thead>
                    <tr>
                        <td className="border-2 font-medium w-32 text-center ">NO.</td>
                        <td className="border-2">{board.bno}</td>
                    </tr>
                    <tr>
                        <td className="border-2 font-medium h-10 text-center">TITLE</td>
                        <td className="border-2">
                        <input
                            className="border-2"
                            type="text" 
                            name="title" 
                            value={board.title}
                            onChange={handleChange}
                        ></input>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2 font-medium h-80 text-center">CONTENT</td>
                        <td className="border-2">
                        <input
                            className="border-2"
                            type="text" 
                            name="content" 
                            value={board.content}
                            onChange={handleChange}
                        ></input>
                        </td>             
                    </tr>
                    <tr >
                        <td className="border-2 font-medium text-center">NICKNAME</td>
                        <td className="border-2">{board.nickname}</td>
                    </tr>
                    {/* <tr >
                        <td className="border-2 font-medium text-center">EMAIL</td>
                        <td className="border-2">{board.email}</td>
                    </tr> */}
                    <tr >
                        <td className="border-2 font-medium text-center">REGDATE</td>
                        <td className="border-2">{board.regDate}</td>
                    </tr>
                    <tr >
                        <td className="border-2 font-medium text-center">MODDATE</td>
                        <td className="border-2">{board.modDate}</td>
                    </tr>
                </thead>
        
                <div className="flex  text-center justify-center">
                    <button 
                    onClick={handleClickModify}
                    className="w-20 p-2 m-2 border-2 rounded-md">
                        MODIFY
                    </button>
                    <button 
                    onClick={handleClickDelete} 
                    className="w-20 p-2 m-2 border-2 rounded-md">
                        DELETE
                    </button>
                    <button 
                    onClick={moveList}
                    className="w-20 p-2 m-2 border-2 rounded-md">
                        LIST
                    </button>
                </div>
        
            </table>

            {/* <div className="flex  text-center justify-center">
                    <button 
                    onClick={handleClickModify}
                    className="w-20 p-2 m-2 border-2 rounded-md">
                        MODIFY
                    </button>
                    <button 
                    onClick={handleClickDelete} 
                    className="w-20 p-2 m-2 border-2 rounded-md">
                        DELETE
                    </button>
                    <button 
                    onClick={moveList}
                    className="w-20 p-2 m-2 border-2 rounded-md">
                        LIST
                    </button>
            </div> */}
      </div>

    );
    
}
 
export default QNAModifyComponent;