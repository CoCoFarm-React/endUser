import { useState } from "react"
import { useRef } from "react"
import { registBoard } from "../../api/FarmerAPI"
import { useNavigate } from "react-router-dom"


const initState = {
  title:'제목 TEST',
  content:'내용 TEST',  
  email:'Email TEST',
  nickname:'NickName TEST',
  cateno:2

}

const FarmerDiaryRegistComponent = ({moveList, moveDiaryList}) => {
  
  const fileRef = useRef()

  const [board, setBoard] = useState({...initState})

  const nav = useNavigate()


  const handleChange = (e) => {

      board[e.target.name] = e.target.value

      setBoard({...board})
  }

  const handleClickSave = (e) => {
      
      const formData = new FormData();

      formData.append("title", board.title)
      formData.append("content", board.content)
      // formData.append("email", board.email)
      formData.append("nickname", board.nickname)
      formData.append("cateno", board.cateno)

      console.dir(fileRef.current)

      const arr = fileRef.current.files

      for(let file of arr){
          formData.append("files", file) // files : 컨트롤러에서 받을 때 이름
      }

      registBoard(formData).then(data => {
      moveDiaryList()
      })
      
  }

  const handleClickClear = (e) => {
      
      fileRef.current.value = ''
  }

  return ( 

    <div className="m-2 p-2">
            
      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">Title</div>
        <input 
        type='text'
        name='title' 
        value={board.title}
        onChange={handleChange}
        className="border-2 mt-2 mb-2 h-10 w-full"
        >

        </input>
      </div>

      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">Content</div>
        <input 
        type='textarea' 
        name='content' 
        value={board.content} 
        onChange={handleChange}
        className="border-2 mt-2 mb-2 h-[20vh] w-full"
        >

        </input>
      </div>

      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">NickName</div>
        <div name='nickname'>{board.nickname}</div>

      </div>

      <div className="m-2 p-2 border-2">
        <div className="text-orange-500 font-bold">상품사진</div>                 
          <input 
          type='file' 
          ref={fileRef} 
          multiple 
          name='images' 
          onChange={handleChange}></input>
      </div>

      <div className="mt-2">
        <button 
        onClick={handleClickSave}
        className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
        >Save
        </button>

        <button 
        onClick={handleClickClear}
        className="bg-orange-500 rounded-md w-auto p-2 m-2 text-white"
        >ClearFiles
        </button>

        <button 
        onClick={() => nav("/farmer/diary/")}
        className="bg-gray-600 rounded-md w-20 p-2 m-2 text-white"
        >List
        </button>                
      </div>

    </div>

   );
}
 
export default FarmerDiaryRegistComponent;