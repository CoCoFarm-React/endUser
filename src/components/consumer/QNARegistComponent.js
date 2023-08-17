import { useRef, useState } from "react";


const initState = {
    title: '제목',
    content: '내용',
    email: '이메일',
    nickname: '닉네임',
    cateno:'1'
}


const QNARegistComponent = ({moveList}) => {

    

    const [board, setBoard] = useState({...initState})

    // const handleChange = (e) => {

    //     board[e.target.name] = e.target.value

    //     setBoard({...board})
    // }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBoard(prevBoard => ({
          ...prevBoard,
          [name]: value
        }));
    }

    const handleClickSave = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("TITLE", board.title)
        formData.append("CONTENT", board.content)
        formData.append("WRITER", board.writer)
        formData.append("EMAIL", board.email)
        formData.append("NICKNAME", board.nickname)

        // console.dir(fileRef.current)

        // const arr = fileRef.current.files

        //     for(let file of arr){
        //     // files : 컨트롤러에서 받을 때 이름.
        //     formData.append("files", file) 
        // }
        
        alert("글이 등록되었습니다.");
        // 등록 후 목록 화면으로 이동
        moveList();

    }

    const handleClickDelete = () => {
        setBoard(initState);
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
                onClick={handleClickDelete}>
                    CLEAR FILES
                </button>
                <button 
                onClick={moveList}
                className="w-20 p-2 m-2 rounded-md">
                    List
                </button>  
            </div>
        </div>
     
     );
}
 
export default QNARegistComponent;