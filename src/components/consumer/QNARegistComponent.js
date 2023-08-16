import { useRef, useState } from "react";
import { postBoard } from "../../api/ConsumerAPI";


const initState = {
    title: '제목',
    content: '내용',
    email: '이메일',
    nickname: '닉네임'
}


const QNARegistComponent = ({moveList}) => {

    const fileRef = useRef

    const [board, setBoard] = useState({...initState})

    const handleChange = (e) => {

        board[e.target.name] = e.target.value

        setBoard
        ({...board})
    }

    const handleClickSave = (e) => {

        const formData = new FormData();

        formData.append("TITLE", board.title)
        formData.append("CONTENT", board.content)
        formData.append("WRITER", board.writer)
        formData.append("EMAIL", board.email)
        formData.append("NICKNAME", board.nickname)

        console.dir(fileRef.current)

        const arr = fileRef.current.files

            for(let file of arr) {
                // files : 컨트롤러에서 받을 때 이름.
                formData.append("files", file) 
        }
        // 등록하는 api호출
        
        postBoard(formData).then(data => {
            const rno = data.result
            alert(`${rno}번이 등록되었습니다!!!!!`)
            moveList()
        }) 

    }

    const handleClickClear = (e) => {
        
        fileRef.current.value = ''
    }

    return ( 

        <div className="m-2 p-2 board-2">
            <div className="m-auto border-2 font-bold">
                TITLE 
                <input 
                type='text' 
                name='title' 
                value={board.title} 
                onChange={handleChange} 
                className="border-2 mt-2 mb-2 h-10 w-full">
                </input>
            </div>

            <div className="m-auto border-2 font-bold">
                CONTENT 
                <input 
                type='textarea' 
                name='content' 
                value={board.content} 
                onChange={handleChange} 
                className="border-2 mt-2 mb-2 h-[20vh] w-full">
                </input>
            </div>

            <div className="m-auto border-2 font-bold">
                NICKNAME 
                <input 
                type='text' 
                name='nickname' 
                value={board.nickname} 
                onChange={handleChange} 
                className="border-2 mt-2 mb-2 h-10">
                </input>
            </div>

            <div className="m-auto border-2 font-bold">
                EMAIL 
                <input 
                type='text' 
                name='email' 
                value={board.email} 
                onChange={handleChange} 
                className="border-2 mt-2 mb-2 h-10">
                </input>
            </div>

            {/* <div className="m-auto border-2 font-bold">
                <input 
                className="m-auto items-center" 
                type='file' 
                ref={fileRef} 
                multiple 
                name='images' 
                onChange={handleChange}>
                </input>
            </div> */}

            <div className="mt-2">
                <button 
                className="rounded-md w-20 p-2 m-2" 
                onClick={handleClickSave}>
                    SAVE
                </button>
                <button 
                className="rounded-md w-auto p-2 m-2" 
                onClick={handleClickClear}>
                    CLEAR FILES
                </button>
                <button 
                onClick={moveList}
                className="w-20 p-2 m-2 rounded-md">
                    LIST
                </button>
            </div>
        </div>
     
     );
}
 
export default QNARegistComponent;